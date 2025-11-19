// 🗄️ ALMACENAMIENTO LOCAL - Como WhatsApp guarda mensajes offline
// IndexedDB para datos electorales persistentes

class ElectoralStorageDB {
  constructor() {
    this.dbName = 'ElijePeruDB';
    this.version = 2;
    this.db = null;
  }

  // 📥 INICIALIZAR BASE DE DATOS LOCAL
  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      
      request.onerror = () => {
        console.error('❌ Error al abrir IndexedDB');
        reject(request.error);
      };
      
      request.onsuccess = () => {
        this.db = request.result;
        console.log('✅ IndexedDB inicializada - Datos offline listos');
        resolve(this.db);
      };
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        
        // 🏛️ STORE: Candidatos
        if (!db.objectStoreNames.contains('candidates')) {
          const candidatesStore = db.createObjectStore('candidates', { keyPath: 'id' });
          candidatesStore.createIndex('region', 'region', { unique: false });
          candidatesStore.createIndex('partido', 'partido', { unique: false });
          console.log('📋 Store candidatos creado');
        }
        
        // 📅 STORE: Eventos del calendario
        if (!db.objectStoreNames.contains('calendar')) {
          const calendarStore = db.createObjectStore('calendar', { keyPath: 'id' });
          calendarStore.createIndex('fecha', 'fecha', { unique: false });
          calendarStore.createIndex('tipo', 'tipo', { unique: false });
          console.log('📅 Store calendario creado');
        }
        
        // 📰 STORE: Noticias
        if (!db.objectStoreNames.contains('news')) {
          const newsStore = db.createObjectStore('news', { keyPath: 'id' });
          newsStore.createIndex('fecha', 'fecha', { unique: false });
          console.log('📰 Store noticias creado');
        }
        
        // ⚖️ STORE: Marco Legal
        if (!db.objectStoreNames.contains('legal')) {
          const legalStore = db.createObjectStore('legal', { keyPath: 'id' });
          legalStore.createIndex('categoria', 'categoria', { unique: false });
          console.log('⚖️ Store marco legal creado');
        }
      };
    });
  }

  // 💾 GUARDAR DATOS (como WhatsApp guarda mensajes)
  async saveData(storeName, data) {
    if (!this.db) await this.init();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);
      
      // Si es array, guardar todos
      if (Array.isArray(data)) {
        Promise.all(
          data.map(item => {
            return new Promise((res, rej) => {
              const request = store.put(item);
              request.onsuccess = () => res(request.result);
              request.onerror = () => rej(request.error);
            });
          })
        ).then(resolve).catch(reject);
      } else {
        // Guardar item individual
        const request = store.put(data);
        request.onsuccess = () => {
          console.log(`💾 Guardado en ${storeName}:`, data.id || 'item');
          resolve(request.result);
        };
        request.onerror = () => reject(request.error);
      }
    });
  }

  // 📖 OBTENER DATOS (lectura offline)
  async getData(storeName, id = null) {
    if (!this.db) await this.init();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([storeName], 'readonly');
      const store = transaction.objectStore(storeName);
      
      if (id) {
        // Obtener item específico
        const request = store.get(id);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      } else {
        // Obtener todos los items
        const request = store.getAll();
        request.onsuccess = () => {
          console.log(`📖 Datos leídos de ${storeName}:`, request.result.length, 'items');
          resolve(request.result);
        };
        request.onerror = () => reject(request.error);
      }
    });
  }

  // 🔍 BUSCAR DATOS (filtros offline)
  async searchData(storeName, indexName, value) {
    if (!this.db) await this.init();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([storeName], 'readonly');
      const store = transaction.objectStore(storeName);
      const index = store.index(indexName);
      
      const request = index.getAll(value);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // 🧹 LIMPIAR CACHE (mantenimiento)
  async clearStore(storeName) {
    if (!this.db) await this.init();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);
      
      const request = store.clear();
      request.onsuccess = () => {
        console.log(`🧹 Store ${storeName} limpiado`);
        resolve();
      };
      request.onerror = () => reject(request.error);
    });
  }
}

// 🌐 INSTANCIA GLOBAL - Disponible en toda la app
const electoralDB = new ElectoralStorageDB();

// 📦 PRECARGAR DATOS AL INICIALIZAR APP
export const initOfflineData = async () => {
  try {
    console.log('🚀 Inicializando almacenamiento offline...');
    
    // Inicializar DB
    await electoralDB.init();
    
    // Importar y guardar datos electorales
    const { candidates } = await import('../data/additionalData');
    const { electoralCalendar } = await import('../data/electoralData');
    
    // Guardar candidatos offline
    await electoralDB.saveData('candidates', candidates);
    console.log('✅ Candidatos guardados offline');
    
    // Guardar calendario offline
    const calendarEvents = electoralCalendar.flatMap(month => 
      month.events.map(event => ({
        id: `${month.month}-${event.day}`,
        fecha: `${month.month}-${event.day}`,
        tipo: event.type,
        titulo: event.title,
        descripcion: event.description || '',
        mes: month.month,
        dia: event.day
      }))
    );
    
    await electoralDB.saveData('calendar', calendarEvents);
    console.log('✅ Calendario guardado offline');
    
    // Datos de marco legal
    const legalData = [
      {
        id: 'constitucion',
        categoria: 'normativa',
        titulo: 'Constitución Política del Perú',
        contenido: 'Artículos relacionados con elecciones...'
      },
      {
        id: 'ley-electoral',
        categoria: 'normativa', 
        titulo: 'Ley de Elecciones',
        contenido: 'Normativa electoral vigente...'
      }
    ];
    
    await electoralDB.saveData('legal', legalData);
    console.log('✅ Marco legal guardado offline');
    
    console.log('🎉 DATOS OFFLINE LISTOS - App funciona como WhatsApp');
    return true;
    
  } catch (error) {
    console.error('❌ Error inicializando datos offline:', error);
    return false;
  }
};

// 📱 HOOK PARA USAR DATOS OFFLINE EN COMPONENTES
export const useOfflineData = () => {
  return {
    // Obtener candidatos offline
    getCandidates: async () => {
      try {
        return await electoralDB.getData('candidates');
      } catch (error) {
        console.error('Error obteniendo candidatos offline:', error);
        return [];
      }
    },
    
    // Obtener eventos del calendario offline
    getCalendarEvents: async () => {
      try {
        return await electoralDB.getData('calendar');
      } catch (error) {
        console.error('Error obteniendo calendario offline:', error);
        return [];
      }
    },
    
    // Buscar candidatos por región offline
    getCandidatesByRegion: async (region) => {
      try {
        return await electoralDB.searchData('candidates', 'region', region);
      } catch (error) {
        console.error('Error buscando candidatos por región:', error);
        return [];
      }
    },
    
    // Obtener marco legal offline
    getLegalFramework: async () => {
      try {
        return await electoralDB.getData('legal');
      } catch (error) {
        console.error('Error obteniendo marco legal:', error);
        return [];
      }
    }
  };
};

export default electoralDB;