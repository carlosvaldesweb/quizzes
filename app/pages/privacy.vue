<script setup lang="ts">
definePageMeta({ layout: "public" });

const appName = useAppName();

useSeoMeta({
  title: `Política de Privacidad — Aviso de Privacidad — ${appName}`,
  description:
    `Conoce cómo ${appName} recopila, usa y protege tus datos personales. Aviso de Privacidad conforme a la LFPDPPP, RGPD y CCPA.`,
});
</script>

<template>
  <div>
    <UPageHero
      title="Política de Privacidad"
      description="Última actualización: 1 de febrero de 2026"
    />

    <UContainer class="pb-24">
      <div class="max-w-3xl mx-auto space-y-10 text-base leading-relaxed">
        <!-- 1. Introducción -->
        <section>
          <h2 class="text-2xl font-bold mb-4">1. Introducción</h2>
          <p class="text-muted">
            La presente Política de Privacidad (en adelante, también "Aviso de
            Privacidad") describe cómo {{ appName }} (en adelante, "nosotros", "la
            Plataforma" o "el Responsable") recopila, utiliza, almacena y
            protege los datos personales de los usuarios que acceden y utilizan
            la plataforma {{ appName }} (en adelante, "el Servicio").
          </p>
          <p class="text-muted mt-3">
            Este documento constituye el Aviso de Privacidad Integral conforme a
            los artículos 15 a 18 de la Ley Federal de Protección de Datos
            Personales en Posesión de los Particulares (LFPDPPP) de México y su
            Reglamento. Asimismo, cumple con los requisitos del Reglamento
            General de Protección de Datos (RGPD) de la Unión Europea y la Ley
            de Privacidad del Consumidor de California (CCPA).
          </p>
          <p class="text-muted mt-3">
            Al crear una cuenta, acceder al Servicio o participar en una sesión,
            confirmas que has leído y comprendido esta Política de Privacidad.
          </p>
        </section>

        <!-- 2. Responsable del tratamiento -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            2. Responsable del tratamiento
          </h2>
          <p class="text-muted">
            El responsable del tratamiento de tus datos personales es una
            persona física con domicilio en México, que opera la plataforma
            {{ appName }}.
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              Correo electrónico de contacto:
              <span class="text-default font-medium">soporte@quizzes.app</span>
            </li>
            <li>Ubicación: México</li>
          </ul>
          <p class="text-muted mt-3">
            Para cualquier solicitud relacionada con tus datos personales,
            puedes contactarnos a través del correo electrónico indicado.
          </p>
        </section>

        <!-- 3. Datos que recopilamos -->
        <section>
          <h2 class="text-2xl font-bold mb-4">3. Datos que recopilamos</h2>
          <p class="text-muted">
            Recopilamos diferentes tipos de datos personales dependiendo de cómo
            interactúas con el Servicio:
          </p>

          <h3 class="text-lg font-semibold mt-6 mb-2">3.1 Datos de cuenta</h3>
          <p class="text-muted">
            Al crear una cuenta, recopilamos:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>Nombre</li>
            <li>Correo electrónico</li>
            <li>
              Contraseña (almacenada de forma segura mediante hash
              criptográfico; nunca almacenamos tu contraseña en texto plano)
            </li>
          </ul>

          <h3 class="text-lg font-semibold mt-6 mb-2">
            3.2 Datos de contenido
          </h3>
          <p class="text-muted">
            Los quizzes, preguntas, respuestas y configuraciones de sesión que
            creas dentro de la plataforma.
          </p>

          <h3 class="text-lg font-semibold mt-6 mb-2">
            3.3 Datos de participantes invitados
          </h3>
          <p class="text-muted">
            Cuando un participante se une a una sesión mediante un código de
            acceso, recopilamos:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>Nombre o alias proporcionado al unirse</li>
            <li>Respuestas a las preguntas del quiz</li>
            <li>Tiempo de respuesta por pregunta</li>
            <li>Puntaje obtenido</li>
          </ul>

          <h3 class="text-lg font-semibold mt-6 mb-2">3.4 Datos de pago</h3>
          <p class="text-muted">
            Los pagos se procesan a través de Stripe. {{ appName }}
            <span class="text-default font-medium"
              >no almacena datos de tarjetas de crédito o débito</span
            >. Stripe actúa como procesador de pagos independiente y gestiona la
            información financiera conforme a su propia política de privacidad y
            los estándares PCI DSS.
          </p>

          <h3 class="text-lg font-semibold mt-6 mb-2">3.5 Datos de uso</h3>
          <p class="text-muted">
            De forma automática, podemos recopilar:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>Dirección IP</li>
            <li>Tipo de navegador y sistema operativo</li>
            <li>Páginas visitadas y acciones realizadas</li>
            <li>Fecha y hora de acceso</li>
            <li>Información del dispositivo</li>
          </ul>

          <h3 class="text-lg font-semibold mt-6 mb-2">
            3.6 Cookies y tecnologías similares
          </h3>
          <p class="text-muted">
            Utilizamos cookies para el funcionamiento del Servicio. Para
            información detallada, consulta nuestra
            <NuxtLink to="/cookies" class="text-primary underline">
              Política de Cookies</NuxtLink
            >.
          </p>
        </section>

        <!-- 4. Finalidades del tratamiento -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            4. Finalidades del tratamiento
          </h2>
          <p class="text-muted">
            Tratamos tus datos personales para las siguientes finalidades:
          </p>

          <h3 class="text-lg font-semibold mt-6 mb-2">
            Finalidades primarias (necesarias)
          </h3>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>Crear y gestionar tu cuenta de usuario</li>
            <li>Proporcionar y mantener el Servicio</li>
            <li>Procesar pagos y gestionar suscripciones</li>
            <li>Almacenar y mostrar tus quizzes, sesiones y resultados</li>
            <li>Permitir la participación en sesiones mediante códigos de acceso</li>
            <li>Garantizar la seguridad e integridad de la plataforma</li>
            <li>Cumplir con obligaciones legales y fiscales</li>
          </ul>

          <h3 class="text-lg font-semibold mt-6 mb-2">
            Finalidades secundarias (opcionales)
          </h3>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>Enviar comunicaciones sobre actualizaciones del Servicio</li>
            <li>Mejorar la experiencia de usuario y el rendimiento de la plataforma</li>
            <li>Realizar análisis estadísticos agregados y anónimos</li>
          </ul>
          <p class="text-muted mt-3">
            Si no deseas que tus datos sean utilizados para las finalidades
            secundarias, puedes comunicarlo a
            <span class="text-default font-medium">soporte@quizzes.app</span>.
          </p>
        </section>

        <!-- 5. Base legal para el tratamiento (RGPD) -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            5. Base legal para el tratamiento (RGPD)
          </h2>
          <p class="text-muted">
            Para usuarios ubicados en la Unión Europea o el Espacio Económico
            Europeo, el tratamiento de datos se fundamenta en las siguientes
            bases legales del artículo 6 del RGPD:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              <span class="text-default font-medium"
                >Ejecución de un contrato (Art. 6.1.b):</span
              >
              gestión de cuentas, prestación del Servicio y procesamiento de
              pagos.
            </li>
            <li>
              <span class="text-default font-medium"
                >Interés legítimo (Art. 6.1.f):</span
              >
              seguridad de la plataforma, prevención de fraude y mejora del
              Servicio.
            </li>
            <li>
              <span class="text-default font-medium"
                >Consentimiento (Art. 6.1.a):</span
              >
              cookies no esenciales y comunicaciones de marketing.
            </li>
            <li>
              <span class="text-default font-medium"
                >Obligación legal (Art. 6.1.c):</span
              >
              cumplimiento de obligaciones fiscales y legales aplicables.
            </li>
          </ul>
        </section>

        <!-- 6. Consentimiento (LFPDPPP) -->
        <section>
          <h2 class="text-2xl font-bold mb-4">6. Consentimiento (LFPDPPP)</h2>
          <p class="text-muted">
            Conforme a la Ley Federal de Protección de Datos Personales en
            Posesión de los Particulares (LFPDPPP), el presente documento
            constituye el Aviso de Privacidad Integral que se pone a tu
            disposición.
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              <span class="text-default font-medium"
                >Consentimiento expreso:</span
              >
              al crear una cuenta en {{ appName }}, otorgas tu consentimiento expreso
              para el tratamiento de tus datos personales conforme a las
              finalidades descritas en este Aviso.
            </li>
            <li>
              <span class="text-default font-medium"
                >Consentimiento tácito:</span
              >
              los participantes invitados que se unan a una sesión mediante un
              código de acceso otorgan su consentimiento tácito al proporcionar
              voluntariamente su nombre o alias y sus respuestas.
            </li>
          </ul>
          <p class="text-muted mt-3">
            En caso de que no estés de acuerdo con el tratamiento de tus datos,
            puedes ejercer tus derechos conforme a lo establecido en la sección
            7 de este Aviso.
          </p>
        </section>

        <!-- 7. Derechos ARCO (LFPDPPP) -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            7. Derechos ARCO (LFPDPPP)
          </h2>
          <p class="text-muted">
            Conforme a la LFPDPPP, tienes derecho a ejercer en todo momento tus
            derechos de Acceso, Rectificación, Cancelación y Oposición (derechos
            ARCO) respecto a tus datos personales:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              <span class="text-default font-medium">Acceso:</span> derecho a
              conocer qué datos personales tenemos sobre ti y cómo los
              utilizamos.
            </li>
            <li>
              <span class="text-default font-medium">Rectificación:</span>
              derecho a solicitar la corrección de datos inexactos o
              incompletos.
            </li>
            <li>
              <span class="text-default font-medium">Cancelación:</span>
              derecho a solicitar la eliminación de tus datos cuando consideres
              que no están siendo tratados conforme a los principios y deberes
              aplicables.
            </li>
            <li>
              <span class="text-default font-medium">Oposición:</span> derecho
              a oponerte al tratamiento de tus datos para finalidades
              específicas.
            </li>
          </ul>

          <h3 class="text-lg font-semibold mt-6 mb-2">
            Cómo ejercer tus derechos ARCO
          </h3>
          <p class="text-muted">
            Puedes enviar tu solicitud al correo
            <span class="text-default font-medium">soporte@quizzes.app</span>
            incluyendo:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>Tu nombre completo y correo electrónico asociado a tu cuenta</li>
            <li>Una descripción clara del derecho que deseas ejercer</li>
            <li>
              Cualquier documentación que facilite la localización de tus datos
            </li>
          </ul>
          <p class="text-muted mt-3">
            Responderemos a tu solicitud en un plazo máximo de
            <span class="text-default font-medium">20 días hábiles</span>
            contados a partir de la recepción de la solicitud completa, conforme
            a lo establecido en la LFPDPPP. En caso de que la solicitud resulte
            procedente, se hará efectiva dentro de los 15 días hábiles
            siguientes.
          </p>
          <p class="text-muted mt-3">
            Si consideras que tu derecho de protección de datos personales ha
            sido vulnerado, puedes acudir ante el Instituto Nacional de
            Transparencia, Acceso a la Información y Protección de Datos
            Personales (INAI) en México:
            <span class="text-default font-medium">www.inai.org.mx</span>.
          </p>
        </section>

        <!-- 8. Derechos bajo el RGPD -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            8. Derechos bajo el RGPD (Unión Europea)
          </h2>
          <p class="text-muted">
            Si te encuentras en la Unión Europea o el Espacio Económico Europeo,
            cuentas con los siguientes derechos adicionales conforme al RGPD:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              <span class="text-default font-medium">Derecho de acceso:</span>
              obtener confirmación de si se están tratando tus datos y acceder a
              ellos.
            </li>
            <li>
              <span class="text-default font-medium"
                >Derecho de rectificación:</span
              >
              corregir datos inexactos o completar datos incompletos.
            </li>
            <li>
              <span class="text-default font-medium"
                >Derecho de supresión:</span
              >
              solicitar la eliminación de tus datos ("derecho al olvido").
            </li>
            <li>
              <span class="text-default font-medium"
                >Derecho a la portabilidad:</span
              >
              recibir tus datos en un formato estructurado y de uso común.
            </li>
            <li>
              <span class="text-default font-medium"
                >Derecho a la limitación del tratamiento:</span
              >
              solicitar la restricción del tratamiento de tus datos en
              determinadas circunstancias.
            </li>
            <li>
              <span class="text-default font-medium"
                >Derecho de oposición:</span
              >
              oponerte al tratamiento basado en interés legítimo o para fines de
              marketing directo.
            </li>
            <li>
              <span class="text-default font-medium"
                >Derecho sobre decisiones automatizadas:</span
              >
              no ser objeto de decisiones basadas únicamente en el tratamiento
              automatizado que produzcan efectos jurídicos significativos.
            </li>
          </ul>
          <p class="text-muted mt-3">
            Responderemos a tus solicitudes en un plazo máximo de
            <span class="text-default font-medium">30 días naturales</span>.
            Tienes derecho a presentar una reclamación ante la autoridad de
            protección de datos de tu país de residencia.
          </p>
        </section>

        <!-- 9. Derechos bajo la CCPA -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            9. Derechos bajo la CCPA (California)
          </h2>
          <p class="text-muted">
            Si resides en California, la Ley de Privacidad del Consumidor de
            California (CCPA) te otorga los siguientes derechos:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              <span class="text-default font-medium">Derecho a conocer:</span>
              solicitar información sobre las categorías y datos específicos que
              hemos recopilado sobre ti.
            </li>
            <li>
              <span class="text-default font-medium">Derecho a eliminar:</span>
              solicitar la eliminación de tus datos personales.
            </li>
            <li>
              <span class="text-default font-medium"
                >Derecho a optar por no participar en la venta:</span
              >
              {{ appName }}
              <span class="text-default font-medium"
                >no vende datos personales</span
              >
              a terceros ni los ha vendido en los últimos 12 meses.
            </li>
            <li>
              <span class="text-default font-medium"
                >Derecho a la no discriminación:</span
              >
              no recibirás un trato diferente por ejercer tus derechos bajo la
              CCPA.
            </li>
          </ul>
          <p class="text-muted mt-3">
            Para ejercer tus derechos, contacta a
            <span class="text-default font-medium">soporte@quizzes.app</span>.
            Verificaremos tu identidad antes de procesar tu solicitud.
          </p>
        </section>

        <!-- 10. Participantes invitados -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            10. Datos de participantes invitados
          </h2>
          <p class="text-muted">
            Los participantes que se unen a sesiones mediante un código de
            acceso no necesitan crear una cuenta. Al participar, se recopilan
            los siguientes datos:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>Nombre o alias proporcionado al unirse a la sesión</li>
            <li>Respuestas a las preguntas del quiz</li>
            <li>Tiempo de respuesta y puntaje obtenido</li>
          </ul>
          <p class="text-muted mt-3">
            Estos datos se almacenan mientras la sesión y la cuenta del creador
            permanezcan activas. Los participantes pueden solicitar el acceso o
            la eliminación de sus datos contactando a
            <span class="text-default font-medium">soporte@quizzes.app</span>.
          </p>
          <p class="text-muted mt-3">
            El creador de la sesión actúa como corresponsable del tratamiento de
            datos de sus participantes y es responsable de informar a los
            participantes sobre el uso de la plataforma y de obtener el
            consentimiento necesario antes de iniciar la sesión, especialmente
            cuando los participantes sean menores de edad.
          </p>
        </section>

        <!-- 11. Menores de edad -->
        <section>
          <h2 class="text-2xl font-bold mb-4">11. Menores de edad</h2>
          <p class="text-muted">
            {{ appName }} no está dirigido a menores de 13 años y no recopilamos
            intencionalmente datos personales de menores de dicha edad.
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              <span class="text-default font-medium"
                >Menores de 13 años:</span
              >
              no pueden crear una cuenta. Si detectamos que un menor de 13 años
              ha proporcionado datos personales, los eliminaremos de inmediato.
            </li>
            <li>
              <span class="text-default font-medium">De 13 a 17 años:</span>
              pueden crear una cuenta únicamente con el consentimiento de un
              padre, madre o tutor legal, quien asume la responsabilidad del uso
              del Servicio.
            </li>
            <li>
              <span class="text-default font-medium"
                >Participantes invitados menores de edad:</span
              >
              el creador de la sesión es responsable de obtener el
              consentimiento parental correspondiente antes de permitir la
              participación de menores.
            </li>
          </ul>
          <p class="text-muted mt-3">
            Si eres padre, madre o tutor y crees que un menor bajo tu custodia
            ha proporcionado datos sin tu consentimiento, contacta a
            <span class="text-default font-medium">soporte@quizzes.app</span>
            para solicitar su eliminación.
          </p>
        </section>

        <!-- 12. Retención de datos -->
        <section>
          <h2 class="text-2xl font-bold mb-4">12. Retención de datos</h2>
          <p class="text-muted">
            Conservamos tus datos personales únicamente durante el tiempo
            necesario para cumplir con las finalidades descritas en esta
            Política:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              <span class="text-default font-medium">Cuenta activa:</span>
              datos conservados mientras tu cuenta permanezca activa.
            </li>
            <li>
              <span class="text-default font-medium">Cuenta eliminada:</span>
              los datos se conservan durante 30 días (periodo de gracia para
              reactivación) y posteriormente se eliminan de forma permanente.
            </li>
            <li>
              <span class="text-default font-medium"
                >Datos de participantes:</span
              >
              conservados mientras exista la sesión y la cuenta del creador esté
              activa.
            </li>
            <li>
              <span class="text-default font-medium"
                >Registros de pago:</span
              >
              conservados durante 5 años conforme a las obligaciones fiscales
              aplicables en México.
            </li>
            <li>
              <span class="text-default font-medium"
                >Registros del servidor:</span
              >
              conservados durante un máximo de 90 días.
            </li>
          </ul>
        </section>

        <!-- 13. Transferencias internacionales -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            13. Transferencias internacionales de datos
          </h2>
          <p class="text-muted">
            {{ appName }} es operado desde México. Tus datos personales pueden ser
            almacenados y procesados en servidores ubicados fuera de tu país de
            residencia, incluyendo Estados Unidos, donde se encuentran algunos
            de nuestros proveedores de servicios.
          </p>
          <p class="text-muted mt-3">
            Para usuarios de la Unión Europea: las transferencias de datos fuera
            del Espacio Económico Europeo se realizan con base en cláusulas
            contractuales tipo aprobadas por la Comisión Europea u otros
            mecanismos de transferencia reconocidos por el RGPD.
          </p>
          <p class="text-muted mt-3">
            Al utilizar el Servicio, consientes la transferencia de tus datos a
            las jurisdicciones donde operan nuestros proveedores de servicios,
            siempre con las garantías de protección adecuadas.
          </p>
        </section>

        <!-- 14. Terceros encargados -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            14. Terceros encargados del tratamiento
          </h2>
          <p class="text-muted">
            Compartimos datos personales con los siguientes terceros
            estrictamente necesarios para la prestación del Servicio:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              <span class="text-default font-medium"
                >Stripe (Estados Unidos):</span
              >
              procesamiento de pagos. Stripe recibe datos de facturación y pago.
              No compartimos datos innecesarios con este proveedor.
            </li>
            <li>
              <span class="text-default font-medium"
                >Proveedor de hosting:</span
              >
              almacenamiento y procesamiento de datos en servidores seguros.
            </li>
          </ul>
          <p class="text-muted mt-3">
            {{ appName }}
            <span class="text-default font-medium"
              >no vende, alquila ni comparte</span
            >
            datos personales con terceros para fines publicitarios o de
            marketing. Solo compartimos datos cuando es estrictamente necesario
            para proporcionar el Servicio o cuando lo exija la ley.
          </p>
        </section>

        <!-- 15. Seguridad -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            15. Seguridad de los datos
          </h2>
          <p class="text-muted">
            Implementamos medidas técnicas y organizativas apropiadas para
            proteger tus datos personales contra acceso no autorizado,
            alteración, divulgación o destrucción, incluyendo:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>Cifrado de comunicaciones mediante HTTPS/TLS</li>
            <li>
              Almacenamiento seguro de contraseñas mediante hash criptográfico
            </li>
            <li>Controles de acceso basados en roles</li>
            <li>Respaldos periódicos de datos</li>
            <li>Protección CSRF (Cross-Site Request Forgery)</li>
          </ul>
          <p class="text-muted mt-3">
            No obstante, ningún sistema de transmisión o almacenamiento de datos
            es completamente seguro. Si tienes motivos para creer que tu
            interacción con nosotros ya no es segura, notifícalo de inmediato a
            <span class="text-default font-medium">soporte@quizzes.app</span>.
          </p>
        </section>

        <!-- 16. Cookies -->
        <section>
          <h2 class="text-2xl font-bold mb-4">16. Cookies</h2>
          <p class="text-muted">
            Utilizamos cookies esenciales para el funcionamiento del Servicio,
            como la gestión de sesiones de autenticación y la protección CSRF.
            También podemos utilizar cookies funcionales para recordar tus
            preferencias.
          </p>
          <p class="text-muted mt-3">
            Para información completa sobre las cookies que utilizamos, sus
            finalidades y cómo gestionarlas, consulta nuestra
            <NuxtLink to="/cookies" class="text-primary underline">
              Política de Cookies</NuxtLink
            >.
          </p>
        </section>

        <!-- 17. Notificación de violaciones -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            17. Notificación de violaciones de datos
          </h2>
          <p class="text-muted">
            En caso de una violación de seguridad que comprometa tus datos
            personales:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              Notificaremos a los usuarios afectados a la brevedad posible y, en
              cumplimiento del RGPD, dentro de las
              <span class="text-default font-medium"
                >72 horas siguientes</span
              >
              al conocimiento de la violación.
            </li>
            <li>
              Notificaremos a la autoridad de protección de datos competente
              cuando sea requerido por la legislación aplicable, incluyendo al
              INAI en México.
            </li>
            <li>
              La notificación incluirá: naturaleza de la violación, datos
              potencialmente afectados, medidas adoptadas y datos de contacto
              para obtener más información.
            </li>
          </ul>
        </section>

        <!-- 18. Cambios a esta política -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            18. Cambios a esta política
          </h2>
          <p class="text-muted">
            Nos reservamos el derecho de actualizar esta Política de Privacidad
            en cualquier momento. Cuando realicemos cambios significativos, te
            notificaremos con al menos
            <span class="text-default font-medium"
              >15 días de anticipación</span
            >
            mediante correo electrónico o un aviso visible en la plataforma.
          </p>
          <p class="text-muted mt-3">
            La fecha de última actualización se indicará al inicio de este
            documento. Te recomendamos revisar periódicamente esta Política para
            mantenerte informado sobre cómo protegemos tus datos.
          </p>
        </section>

        <!-- 19. Aviso de Privacidad Integral -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            19. Aviso de Privacidad Integral (LFPDPPP)
          </h2>
          <p class="text-muted">
            El presente documento constituye el Aviso de Privacidad Integral en
            términos de los artículos 15, 16, 17 y 18 de la Ley Federal de
            Protección de Datos Personales en Posesión de los Particulares
            (LFPDPPP) y los artículos 23 a 28 de su Reglamento.
          </p>
          <p class="text-muted mt-3">
            Cualquier modificación a este Aviso de Privacidad se pondrá a tu
            disposición a través de la plataforma y, cuando corresponda, se te
            notificará por correo electrónico.
          </p>
        </section>

        <!-- 20. Contacto -->
        <section>
          <h2 class="text-2xl font-bold mb-4">20. Contacto</h2>
          <p class="text-muted">
            Para cualquier consulta, solicitud o reclamación relacionada con
            esta Política de Privacidad o el tratamiento de tus datos
            personales, puedes contactarnos a través de:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              Correo electrónico:
              <span class="text-default font-medium">soporte@quizzes.app</span>
            </li>
            <li>A través de la sección de ayuda dentro de la plataforma</li>
          </ul>

          <h3 class="text-lg font-semibold mt-6 mb-2">
            Tiempos de respuesta
          </h3>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              <span class="text-default font-medium">Consultas generales:</span>
              5 días hábiles
            </li>
            <li>
              <span class="text-default font-medium"
                >Solicitudes ARCO (México, LFPDPPP):</span
              >
              20 días hábiles
            </li>
            <li>
              <span class="text-default font-medium"
                >Solicitudes RGPD (Unión Europea):</span
              >
              30 días naturales
            </li>
            <li>
              <span class="text-default font-medium"
                >Solicitudes CCPA (California):</span
              >
              45 días naturales
            </li>
          </ul>
        </section>
      </div>
    </UContainer>
  </div>
</template>
