import React from "react";
import { Link } from "react-router-dom";

export default function MembersInfo() {
  return (
    <>
      <main class="max-w-[1280px] mx-auto px-6 py-12 space-y-16">
        <section class="grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high text-[#003770] border border-blue-100">
              <span
                class="material-symbols-outlined text-[18px]"
                data-icon="verified"
              >
                verified
              </span>
              <span class="font-label-caps text-label-caps">
                GUÍA OFICIAL 2026
              </span>
            </div>
            <h1 class="font-h1 text-h1 text-primary tracking-tight">
              Manual para Miembros de Mesa
            </h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Has sido seleccionado para garantizar la transparencia de la
              voluntad popular. En esta guía encontrarás todo lo necesario para
              cumplir tu labor este 12 de Abril.
            </p>
            <div class="flex flex-wrap gap-4 pt-4">
              <button class="bg-[#003770] text-white px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-blue-900/10">
                <span class="material-symbols-outlined" data-icon="download">
                  download
                </span>
                Descargar Manual PDF
              </button>
              <button class="bg-white border-2 border-[#003770] text-[#003770] px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 active:scale-95 transition-all">
                Ver Video Tutorial
              </button>
            </div>
          </div>
          <div class="relative">
            <div class="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                alt="Electoral Staff Training"
                class="w-full h-full object-cover"
                data-alt="A bright and professional scene showing three diverse individuals in clean corporate vests collaborating in a modern training room. Large informational posters with the Peruvian flag colors are visible in the background. The lighting is bright and airy, creating a sense of clarity and institutional transparency. The focus is on a focused participant reviewing an official manual."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9CI4QTYfqTOmyqbjX0BizDQvT8frqiWrKug6thkw8AZdyfnauNjHMcR4rXe8Rdoie1_nA1SE0xDEy_P0T3NoxPnA6lbczgXLFEjsp6oZU5bIm_OKlD9Fo07DZMxaQoTHaVXvCSL4CeHTKYKI2FILI_gh_-Ce7HE24yi2ZrHojM9Ijl8ynkt3AT2MVrBKIlYJ6a_TEvlqbs6-Xm4SLmCk7wnpJTUly2iGYBH83Rt5MxMfxccYfbPGDYNlOPs_pIWSrt639bYqz9VI"
              />
            </div>
            <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-secondary-container/20 text-secondary rounded-full flex items-center justify-center">
                  <span
                    class="material-symbols-outlined"
                    data-icon="payments"
                    // style="font-variation-settings: &quot;FILL&quot; 1"
                  >
                    payments
                  </span>
                </div>
                <div>
                  <p class="font-label-caps text-label-caps text-secondary uppercase">
                    Compensación
                  </p>
                  <p class="font-h3 text-h3 text-on-surface">S/ 120.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="space-y-8">
          <div class="border-l-4 border-secondary pl-6">
            <h2 class="font-h2 text-h2 text-primary">
              Cronograma de la Jornada
            </h2>
            <p class="text-on-surface-variant font-body-md">
              Sigue estos pasos críticos el día de la elección.
            </p>
          </div>
          <div class="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            <div class="relative step-node flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div class="w-14 h-14 bg-[#003770] text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                01
              </div>
              <h3 class="font-h3 text-h3 text-primary mb-2">Instalación</h3>
              <p class="font-label-caps text-label-caps text-slate-500 mb-4">
                06:00 AM - 07:00 AM
              </p>
              <p class="text-on-surface-variant">
                Llegada al local, recepción de materiales y firma de actas de
                instalación.
              </p>
            </div>
            <div class="relative step-node flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div class="w-14 h-14 bg-[#003770] text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                02
              </div>
              <h3 class="font-h3 text-h3 text-primary mb-2">Sufragio</h3>
              <p class="font-label-caps text-label-caps text-slate-500 mb-4">
                07:00 AM - 07:00 PM
              </p>
              <p class="text-on-surface-variant">
                Identificación de electores, entrega de cédulas y control de la
                cámara secreta.
              </p>
            </div>
            <div class="relative step-node flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div class="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                03
              </div>
              <h3 class="font-h3 text-h3 text-primary mb-2">Escrutinio</h3>
              <p class="font-label-caps text-label-caps text-slate-500 mb-4">
                07:00 PM en adelante
              </p>
              <p class="text-on-surface-variant">
                Conteo de votos, llenado de actas y entrega de resultados a la
                ONPE.
              </p>
            </div>
          </div>
        </section>
        <section class="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 space-y-6">
            <h3 class="font-h2 text-h2 text-primary">Derechos y Beneficios</h3>
            <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table class="w-full border-collapse">
                <thead class="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th class="text-left px-6 py-4 font-label-caps text-label-caps text-slate-600">
                      BENEFICIO
                    </th>
                    <th class="text-left px-6 py-4 font-label-caps text-label-caps text-slate-600">
                      DETALLE
                    </th>
                    <th class="text-center px-6 py-4 font-label-caps text-label-caps text-slate-600">
                      ESTADO
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr class="hover:bg-slate-50 transition-colors">
                    <td class="px-6 py-5 font-semibold text-primary">
                      Compensación Económica
                    </td>
                    <td class="px-6 py-5 text-on-surface-variant">
                      Pago de S/ 120 por jornada efectiva de trabajo.
                    </td>
                    <td class="px-6 py-5 text-center">
                      <span class="inline-block px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-100">
                        Confirmado
                      </span>
                    </td>
                  </tr>
                  <tr class="hover:bg-slate-50 transition-colors">
                    <td class="px-6 py-5 font-semibold text-primary">
                      Día No Laborable
                    </td>
                    <td class="px-6 py-5 text-on-surface-variant">
                      Lunes 13 de abril será feriado no laborable compensable.
                    </td>
                    <td class="px-6 py-5 text-center">
                      <span class="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
                        Ley Vigente
                      </span>
                    </td>
                  </tr>
                  <tr class="hover:bg-slate-50 transition-colors">
                    <td class="px-6 py-5 font-semibold text-primary">
                      Multa por Omisión
                    </td>
                    <td class="px-6 py-5 text-on-surface-variant">
                      Exoneración de multa por no votar si cumples tu labor.
                    </td>
                    <td class="px-6 py-5 text-center">
                      <span class="inline-block px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-100">
                        Automático
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mt-12 space-y-4">
              <h3 class="font-h3 text-h3 text-primary">Procesos Críticos</h3>
              <div class="space-y-4">
                <details
                  class="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
                  open=""
                >
                  <summary class="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-4">
                      <span
                        class="material-symbols-outlined text-primary"
                        data-icon="fact_check"
                      >
                        fact_check
                      </span>
                      <span class="font-h3 text-[18px] text-primary">
                        Checklist de Instalación de Mesa
                      </span>
                    </div>
                    <span
                      class="material-symbols-outlined group-open:rotate-180 transition-transform"
                      data-icon="expand_more"
                    >
                      expand_more
                    </span>
                  </summary>
                  <div class="px-6 pb-6 pt-2 space-y-3">
                    <label class="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container hover:shadow-inner transition-all border border-blue-50">
                      <input
                        class="mt-1 rounded border-slate-300 text-primary focus:ring-primary h-5 w-5"
                        type="checkbox"
                      />
                      <span class="text-on-surface-variant">
                        Verificar la integridad del ánfora y las cajas de
                        material electoral.
                      </span>
                    </label>
                    <label class="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container hover:shadow-inner transition-all border border-blue-50">
                      <input
                        class="mt-1 rounded border-slate-300 text-primary focus:ring-primary h-5 w-5"
                        type="checkbox"
                      />
                      <span class="text-on-surface-variant">
                        Contar las cédulas de sufragio recibidas (no deben
                        faltar ni sobrar).
                      </span>
                    </label>
                    <label class="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container hover:shadow-inner transition-all border border-blue-50">
                      <input
                        class="mt-1 rounded border-slate-300 text-primary focus:ring-primary h-5 w-5"
                        type="checkbox"
                      />
                      <span class="text-on-surface-variant">
                        Firmar el Acta de Instalación (Los 3 miembros
                        obligatoriamente).
                      </span>
                    </label>
                  </div>
                </details>
                <details class="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                  <summary class="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-4">
                      <span
                        class="material-symbols-outlined text-primary"
                        data-icon="policy"
                      >
                        policy
                      </span>
                      <span class="font-h3 text-[18px] text-primary">
                        Protocolo de Incidencias
                      </span>
                    </div>
                    <span
                      class="material-symbols-outlined group-open:rotate-180 transition-transform"
                      data-icon="expand_more"
                    >
                      expand_more
                    </span>
                  </summary>
                  <div class="px-6 pb-6 pt-2 text-on-surface-variant">
                    <p>
                      En caso de propaganda política dentro del aula, alteración
                      del orden o suplantación de identidad, debe comunicarse de
                      inmediato con el coordinador de la ONPE y el fiscalizador
                      del JNE presentes en el local.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
          <aside class="space-y-6">
            <div class="bg-primary text-white p-8 rounded-2xl shadow-xl shadow-blue-900/10">
              <h3 class="font-h3 text-h3 mb-4">Materiales Digitales</h3>
              <p class="text-blue-100 mb-6 text-sm">
                Descarga los formatos oficiales para practicar el llenado de
                actas.
              </p>
              <div class="space-y-4">
                <a
                  class="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group text-white"
                  href="#"
                >
                  <div class="flex items-center gap-3">
                    <span
                      class="material-symbols-outlined "
                      data-icon="picture_as_pdf"
                    >
                      picture_as_pdf
                    </span>
                    <span class="font-semibold">Acta de Escrutinio</span>
                  </div>
                  <span
                    class="material-symbols-outlined transition-opacity"
                    data-icon="download"
                  >
                    download
                  </span>
                </a>
                <a
                  class="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group text-white"
                  href="#"
                >
                  <div class="flex items-center gap-3">
                    <span
                      class="material-symbols-outlined"
                      data-icon="description"
                    >
                      description
                    </span>
                    <span class="font-semibold">Lista de Electores</span>
                  </div>
                  <span
                    class="material-symbols-outlined transition-opacity"
                    data-icon="download"
                  >
                    download
                  </span>
                </a>
                <a
                  class="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group text-white"
                  href="#"
                >
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined" data-icon="movie">
                      movie
                    </span>
                    <span class="font-semibold">Simulador de Voto</span>
                  </div>
                  <span
                    class="material-symbols-outlined transition-opacity"
                    data-icon="open_in_new"
                  >
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
            <div class="bg-surface-container-high p-8 rounded-2xl border border-blue-100 space-y-6">
              <h4 class="font-h3 text-[18px] text-primary">¿Tienes dudas?</h4>
              <div class="flex flex-col gap-4">
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                    <span
                      class="material-symbols-outlined text-[20px]"
                      data-icon="call"
                    >
                      call
                    </span>
                  </div>
                  <div>
                    <p class="text-[12px] text-slate-500 font-bold uppercase">
                      Línea Gratuita
                    </p>
                    <p class="font-bold text-primary">0800-20-123</p>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                    <span
                      class="material-symbols-outlined text-[20px]"
                      data-icon="chat"
                    >
                      chat
                    </span>
                  </div>
                  <div>
                    <p class="text-[12px] text-slate-500 font-bold uppercase">
                      WhatsApp
                    </p>
                    <p class="font-bold text-primary">+51 987 654 321</p>
                  </div>
                </div>
              </div>
              <button class="w-full bg-white border border-slate-200 py-3 rounded-lg text-primary font-semibold hover:bg-white/50 transition-colors active:scale-95">
                Preguntas Frecuentes
              </button>
            </div>
            <div class="relative rounded-2xl overflow-hidden h-48 group">
              <img
                alt="Training Center"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="An interior shot of a contemporary, glass-walled civic training center in Lima. The space is filled with warm, morning sunlight casting long shadows. On the tables are official electoral folders and tablets. The atmosphere is quiet, professional, and ready for institutional education. The color palette is dominated by soft grays, whites, and deep institutional blues."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQIvZ4wJ-yBVdTn42bJ_GiqKhKGr8eViIzIa6-M_mlpO9zv4Kv8t0F_h7IW9plTcRhAB7DurRQBuSsASkLBjtZagPwVvvSMIOCpoeyoAukh0DxRjz_bTg02FntGgsW8LOhrTIBjMEG4fwC-7ZDM2G_VQ2sTvFgKduohyyLTz2AQmijeGyAa568k5cO6Uu13u9WHVhVy6XygUyuin5_zCoVKu_yVi41JoZ66PqVFEIyWAkcZmPXX93OMT_Z8uzdKhHV05z3KvZlSBo"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <p class="text-white font-bold">Capacitación Presencial</p>
                <p class="text-white/80 text-sm">Ubica tu centro más cercano</p>
              </div>
            </div>
          </aside>
        </section>
        <section class="bg-secondary-container/5 rounded-3xl p-12 border border-secondary-container/20 flex flex-col md:flex-row items-center gap-8">
          <div class="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-secondary/20">
            <span
              class="material-symbols-outlined text-4xl"
              data-icon="warning"
              // style="font-variation-settings: &quot;FILL&quot; 1"
            >
              warning
            </span>
          </div>
          <div class="space-y-2">
            <h3 class="font-h3 text-h3 text-secondary">
              Multa por Inasistencia
            </h3>
            <p class="text-on-surface-variant text-body-md">
              Recuerda que la inasistencia como miembro de mesa conlleva una
              multa de <strong class="text-secondary">S/ 257.50</strong>. Si no
              puedes asistir por motivos de salud o fuerza mayor, debes
              presentar tu excusa o justificación ante la ODPE hasta 5 días
              antes de la elección.
            </p>
          </div>
          <button class="bg-secondary text-white px-8 py-4 rounded-xl font-bold whitespace-nowrap hover:bg-red-700 transition-colors active:scale-95 shadow-lg shadow-red-900/10">
            Tramitar Excusa
          </button>
        </section>
      </main>
      <footer class="bg-white border-t border-slate-100 pb-24 md:pb-8 pt-12 mt-12">
        <div class="max-w-[1280px] mx-auto px-6 grid sm:grid-cols-1 md:grid-cols-4 gap-12">
          <div class="col-span-1 md:col-span-2 space-y-6">
            <div class="flex items-center gap-3">
              <img
                alt="Peru"
                class="w-8 h-auto"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD2Evmdfm8c_0vb3uQKVsrmdXnGbpI_yiwGLjxlRKozdpLFka3wRKr7yU0fkTIdxKSj5qsI_9yYlouLHwkzOifbgO4Ea7s18ADNZfJq91gDeg87fZ6GKgeN2pwQFRObp33CgfyHFb7t6i2eAJt3wlV_Qu7NpUHyyGIEoDWuRVGCCK-zoDKC45cXDaNYgpbn8zvS8ovfBo3KVHtSVt9uOZskkgihpuvCNSToo9MYZrvvZeRk9q-Ga6N8m8-1ewgpCI65dMP9sgEHrE"
              />
              <span class="text-lg font-black text-[#003770] uppercase tracking-wider">
                Perú Elige 2026
              </span>
            </div>
            <p class="text-on-surface-variant max-w-sm">
              Plataforma oficial de información electoral para los ciudadanos
              peruanos. Transparencia y democracia para el bicentenario
              consolidado.
            </p>
          </div>
          <div>
            <h4 class="font-label-caps text-label-caps text-slate-400 mb-6 uppercase tracking-widest">
              Instituciones
            </h4>
            <ul class="space-y-4">
              <li>
                <a
                  class="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  ONPE
                </a>
              </li>
              <li>
                <a
                  class="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  JNE
                </a>
              </li>
              <li>
                <a
                  class="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  RENIEC
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-label-caps text-label-caps text-slate-400 mb-6 uppercase tracking-widest">
              Legal
            </h4>
            <ul class="space-y-4">
              <li>
                <a
                  class="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Privacidad
                </a>
              </li>
              <li>
                <a
                  class="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Términos de Uso
                </a>
              </li>
              <li>
                <a
                  class="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Ley Electoral
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="max-w-[1280px] mx-auto px-6 mt-12 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-slate-400">
            © 2026 Gobierno del Perú. Todos los derechos reservados.
          </p>
          <div class="flex gap-6">
            <a
              class="text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              <span class="material-symbols-outlined" data-icon="facebook">
                social_leaderboard
              </span>
            </a>
            <a
              class="text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              <span class="material-symbols-outlined" data-icon="x">
                close
              </span>
            </a>
            <a
              class="text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              <span
                class="material-symbols-outlined"
                data-icon="youtube_activity"
              >
                youtube_activity
              </span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
