<script setup lang="ts">
definePageMeta({ layout: "public" });

const appName = useAppName();

useSeoMeta({
  title: `Política de Cookies — ${appName}`,
  description:
    `Conoce qué cookies utiliza ${appName}, sus finalidades y cómo puedes gestionarlas.`,
});
</script>

<template>
  <div>
    <UPageHero
      title="Política de Cookies"
      description="Última actualización: 1 de febrero de 2026"
    />

    <UContainer class="pb-24">
      <div class="max-w-3xl mx-auto space-y-10 text-base leading-relaxed">
        <!-- 1. Qué son las cookies -->
        <section>
          <h2 class="text-2xl font-bold mb-4">1. ¿Qué son las cookies?</h2>
          <p class="text-muted">
            Las cookies son pequeños archivos de texto que se almacenan en tu
            dispositivo (ordenador, tableta o teléfono móvil) cuando visitas un
            sitio web. Las cookies permiten que el sitio recuerde tus acciones y
            preferencias durante un periodo de tiempo, de modo que no tengas que
            introducirlas de nuevo cada vez que visites el sitio o navegues entre
            páginas.
          </p>
          <p class="text-muted mt-3">
            En {{ appName }} utilizamos cookies y tecnologías similares para garantizar
            el funcionamiento correcto de la plataforma, proteger la seguridad de
            tu sesión y recordar tus preferencias.
          </p>
        </section>

        <!-- 2. Cookies que utilizamos -->
        <section>
          <h2 class="text-2xl font-bold mb-4">2. Cookies que utilizamos</h2>

          <h3 class="text-lg font-semibold mt-6 mb-2">
            2.1 Cookies esenciales (siempre activas)
          </h3>
          <p class="text-muted">
            Estas cookies son estrictamente necesarias para el funcionamiento del
            Servicio. No requieren consentimiento y no pueden ser desactivadas.
          </p>
          <div class="mt-3 overflow-x-auto">
            <table class="w-full text-sm text-muted">
              <thead>
                <tr class="border-b border-default">
                  <th class="text-left py-2 pr-4 text-default font-semibold">Cookie</th>
                  <th class="text-left py-2 pr-4 text-default font-semibold">Finalidad</th>
                  <th class="text-left py-2 text-default font-semibold">Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-default/50">
                  <td class="py-2 pr-4 font-mono text-xs">XSRF-TOKEN</td>
                  <td class="py-2 pr-4">
                    Protección contra ataques de falsificación de solicitudes
                    (CSRF). Garantiza la seguridad de tus interacciones con la
                    plataforma.
                  </td>
                  <td class="py-2">Sesión</td>
                </tr>
                <tr class="border-b border-default/50">
                  <td class="py-2 pr-4 font-mono text-xs">quizzes_session</td>
                  <td class="py-2 pr-4">
                    Gestión de la sesión de autenticación. Permite que permanezcas
                    conectado de forma segura.
                  </td>
                  <td class="py-2">Sesión</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="text-lg font-semibold mt-6 mb-2">
            2.2 Cookies funcionales
          </h3>
          <p class="text-muted">
            Estas cookies mejoran la experiencia de uso al recordar tus
            preferencias. Requieren tu consentimiento.
          </p>
          <div class="mt-3 overflow-x-auto">
            <table class="w-full text-sm text-muted">
              <thead>
                <tr class="border-b border-default">
                  <th class="text-left py-2 pr-4 text-default font-semibold">Cookie</th>
                  <th class="text-left py-2 pr-4 text-default font-semibold">Finalidad</th>
                  <th class="text-left py-2 text-default font-semibold">Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-default/50">
                  <td class="py-2 pr-4 font-mono text-xs">cookie_consent</td>
                  <td class="py-2 pr-4">
                    Almacena tus preferencias de consentimiento de cookies.
                  </td>
                  <td class="py-2">1 año</td>
                </tr>
                <tr class="border-b border-default/50">
                  <td class="py-2 pr-4 font-mono text-xs">nuxt-color-mode</td>
                  <td class="py-2 pr-4">
                    Recuerda tu preferencia de modo claro u oscuro.
                  </td>
                  <td class="py-2">1 año</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="text-lg font-semibold mt-6 mb-2">
            2.3 Cookies analíticas
          </h3>
          <p class="text-muted">
            Actualmente, {{ appName }}
            <span class="text-default font-medium"
              >no utiliza cookies analíticas</span
            >. En caso de incorporarlas en el futuro, se actualizará esta política
            y se solicitará tu consentimiento previo.
          </p>

          <h3 class="text-lg font-semibold mt-6 mb-2">
            2.4 Cookies de terceros
          </h3>
          <p class="text-muted">
            Durante el proceso de pago, Stripe puede establecer cookies propias
            en tu navegador para procesar la transacción de forma segura. Estas
            cookies están sujetas a la política de privacidad de Stripe.
          </p>
        </section>

        <!-- 3. Consentimiento -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            3. Cómo gestionamos el consentimiento
          </h2>
          <p class="text-muted">
            Conforme al RGPD y las mejores prácticas internacionales, gestionamos
            el consentimiento de cookies de la siguiente manera:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              <span class="text-default font-medium">Cookies esenciales:</span>
              se activan automáticamente ya que son necesarias para el
              funcionamiento del Servicio. No requieren consentimiento.
            </li>
            <li>
              <span class="text-default font-medium"
                >Cookies no esenciales:</span
              >
              se activan únicamente después de que otorgues tu consentimiento
              explícito mediante el banner de cookies que se muestra en tu primera
              visita.
            </li>
            <li>
              Puedes modificar tus preferencias en cualquier momento a través del
              enlace "Gestionar cookies" disponible en el pie de página del sitio.
            </li>
          </ul>
        </section>

        <!-- 4. Cómo administrar las cookies -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            4. Cómo administrar las cookies en tu navegador
          </h2>
          <p class="text-muted">
            Además de las opciones que ofrecemos en nuestro banner de
            consentimiento, puedes gestionar o eliminar cookies directamente
            desde la configuración de tu navegador:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              <span class="text-default font-medium">Google Chrome:</span>
              Configuración &gt; Privacidad y seguridad &gt; Cookies y otros
              datos de sitios
            </li>
            <li>
              <span class="text-default font-medium">Mozilla Firefox:</span>
              Configuración &gt; Privacidad y seguridad &gt; Cookies y datos del
              sitio
            </li>
            <li>
              <span class="text-default font-medium">Safari:</span>
              Preferencias &gt; Privacidad &gt; Gestionar datos del sitio web
            </li>
            <li>
              <span class="text-default font-medium">Microsoft Edge:</span>
              Configuración &gt; Cookies y permisos del sitio &gt; Cookies y
              datos almacenados
            </li>
          </ul>
          <p class="text-muted mt-3">
            Ten en cuenta que desactivar las cookies esenciales puede impedir el
            correcto funcionamiento de la plataforma, incluyendo la
            autenticación y la protección de seguridad.
          </p>
        </section>

        <!-- 5. Terceros -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            5. Cookies de terceros en detalle
          </h2>
          <p class="text-muted">
            El único tercero que puede establecer cookies durante tu uso de
            {{ appName }} es Stripe, nuestro procesador de pagos, y solo durante el
            proceso de checkout. Stripe utiliza estas cookies para:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>Procesar pagos de forma segura</li>
            <li>Prevenir transacciones fraudulentas</li>
            <li>Cumplir con los estándares de seguridad PCI DSS</li>
          </ul>
          <p class="text-muted mt-3">
            No tenemos control sobre las cookies establecidas por Stripe. Para
            más información, consulta la política de privacidad y cookies de
            Stripe en su sitio web.
          </p>
        </section>

        <!-- 6. Base legal -->
        <section>
          <h2 class="text-2xl font-bold mb-4">6. Base legal (RGPD)</h2>
          <p class="text-muted">
            El uso de cookies se fundamenta en las siguientes bases legales
            conforme al RGPD:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              <span class="text-default font-medium"
                >Cookies esenciales:</span
              >
              interés legítimo (Art. 6.1.f del RGPD), ya que son estrictamente
              necesarias para proporcionar el Servicio solicitado por el
              usuario.
            </li>
            <li>
              <span class="text-default font-medium"
                >Cookies funcionales y analíticas:</span
              >
              consentimiento del usuario (Art. 6.1.a del RGPD), otorgado
              mediante el banner de consentimiento de cookies.
            </li>
          </ul>
        </section>

        <!-- 7. Cambios -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            7. Cambios a esta política
          </h2>
          <p class="text-muted">
            Nos reservamos el derecho de actualizar esta Política de Cookies en
            cualquier momento, especialmente si incorporamos nuevas cookies o
            tecnologías. Los cambios significativos serán notificados mediante un
            aviso en la plataforma y, cuando corresponda, se solicitará
            nuevamente tu consentimiento.
          </p>
          <p class="text-muted mt-3">
            La fecha de última actualización se indica al inicio de este
            documento.
          </p>
        </section>

        <!-- 8. Contacto -->
        <section>
          <h2 class="text-2xl font-bold mb-4">8. Contacto</h2>
          <p class="text-muted">
            Si tienes preguntas sobre esta Política de Cookies, puedes
            contactarnos a través de:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              Correo electrónico:
              <span class="text-default font-medium">soporte@quizzes.app</span>
            </li>
            <li>A través de la sección de ayuda dentro de la plataforma</li>
          </ul>
          <p class="text-muted mt-3">
            Para más información sobre cómo tratamos tus datos personales,
            consulta nuestra
            <NuxtLink to="/privacy" class="text-primary underline">
              Política de Privacidad</NuxtLink
            >.
          </p>
        </section>
      </div>
    </UContainer>
  </div>
</template>
