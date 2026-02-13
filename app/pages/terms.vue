<script setup lang="ts">
definePageMeta({ layout: "public" });

const appName = useAppName();

useSeoMeta({
  title: `Términos y Condiciones — ${appName}`,
  description:
    `Términos y condiciones de uso de la plataforma ${appName}. Lee nuestras políticas sobre el uso del servicio, privacidad y suscripciones.`,
});
</script>

<template>
  <div>
    <UPageHero
      title="Términos y Condiciones"
      description="Última actualización: 1 de febrero de 2026"
    />

    <UContainer class="pb-24">
      <div class="max-w-3xl mx-auto space-y-10 text-base leading-relaxed">
        <!-- 1. Aceptación -->
        <section>
          <h2 class="text-2xl font-bold mb-4">1. Aceptación de los términos</h2>
          <p class="text-muted">
            Al acceder y utilizar la plataforma {{ appName }} (en adelante, "el
            Servicio"), aceptas cumplir con estos Términos y Condiciones (en
            adelante, "los Términos"). Si no estás de acuerdo con alguno de
            estos términos, te pedimos que no utilices el Servicio.
          </p>
          <p class="text-muted mt-3">
            Estos Términos constituyen un acuerdo legal entre tú (en adelante,
            "el Usuario") y {{ appName }} (en adelante, "nosotros" o "la Plataforma").
            Al crear una cuenta, acceder al Servicio o participar en una sesión,
            confirmas que has leído, comprendido y aceptado estos Términos en su
            totalidad.
          </p>
          <p class="text-muted mt-3">
            Estos Términos se complementan con nuestra
            <NuxtLink to="/privacy" class="text-primary underline">
              Política de Privacidad
            </NuxtLink>
            y nuestra
            <NuxtLink to="/cookies" class="text-primary underline">
              Política de Cookies</NuxtLink
            >, que forman parte integral de este acuerdo. Al aceptar estos
            Términos, también aceptas dichas políticas.
          </p>
        </section>

        <!-- 2. Descripción del servicio -->
        <section>
          <h2 class="text-2xl font-bold mb-4">2. Descripción del servicio</h2>
          <p class="text-muted">
            {{ appName }} es una plataforma web que permite crear cuestionarios
            interactivos (quizzes), compartirlos mediante códigos de acceso y
            obtener resultados de forma inmediata. El Servicio incluye, entre
            otras funcionalidades:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              Creación de quizzes con diferentes tipos de preguntas (opción
              múltiple, verdadero/falso, respuesta corta, encuesta y
              emparejamiento).
            </li>
            <li>
              Sesiones en vivo con códigos de acceso para que los participantes
              respondan sin necesidad de registrarse.
            </li>
            <li>Modos de práctica y flashcards para estudio individual.</li>
            <li>
              Resultados detallados con puntajes, tiempos y estado de cada
              participante.
            </li>
            <li>
              Personalización visual mediante temas prediseñados o
              personalizados.
            </li>
          </ul>
        </section>

        <!-- 3. Registro y cuentas -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            3. Registro y cuentas de usuario
          </h2>
          <p class="text-muted">
            Para crear quizzes y gestionar sesiones, necesitas crear una cuenta
            proporcionando información veraz y actualizada. Eres responsable de
            mantener la confidencialidad de tus credenciales de acceso y de
            todas las actividades que ocurran bajo tu cuenta.
          </p>
          <p class="text-muted mt-3">
            Te comprometes a notificarnos de inmediato si sospechas de cualquier
            uso no autorizado de tu cuenta. Nos reservamos el derecho de
            suspender o eliminar cuentas que violen estos Términos o que
            permanezcan inactivas por un periodo prolongado.
          </p>
          <p class="text-muted mt-3">
            Debes tener al menos
            <span class="text-default font-medium">13 años de edad</span> para
            crear una cuenta. Si eres menor de 13 años, no puedes registrarte ni
            utilizar el Servicio como usuario registrado. Si tienes entre 13 y
            17 años, el registro implica que cuentas con el consentimiento de un
            padre, madre o tutor legal, quien es responsable de supervisar tu
            uso del Servicio y asume la responsabilidad de tus actividades en la
            plataforma.
          </p>
        </section>

        <!-- 4. Planes y suscripciones -->
        <section>
          <h2 class="text-2xl font-bold mb-4">4. Planes y suscripciones</h2>
          <p class="text-muted">
            {{ appName }} ofrece un plan gratuito y un plan de pago (Plan Pro). El
            plan gratuito está disponible sin costo y sin límite de tiempo, con
            las restricciones detalladas en la página de precios.
          </p>

          <h3 class="text-lg font-semibold mt-6 mb-2">Plan Pro</h3>
          <p class="text-muted">
            El Plan Pro ofrece funcionalidades adicionales mediante una
            suscripción de pago mensual o anual. Incluye una prueba gratuita de
            30 días durante la cual no se realizará ningún cobro. Al finalizar
            el periodo de prueba, se cobrará automáticamente el monto
            correspondiente al plan seleccionado, a menos que canceles antes de
            que termine.
          </p>

          <h3 class="text-lg font-semibold mt-6 mb-2">Facturación</h3>
          <p class="text-muted">
            Los pagos se procesan de forma segura a través de Stripe. Al
            suscribirte, autorizas cargos recurrentes a tu método de pago según
            el ciclo de facturación elegido (mensual o anual). Los precios
            pueden estar sujetos a impuestos aplicables según tu ubicación.
          </p>

          <h3 class="text-lg font-semibold mt-6 mb-2">Cancelación</h3>
          <p class="text-muted">
            Puedes cancelar tu suscripción en cualquier momento desde la
            configuración de tu cuenta. Al cancelar, mantendrás acceso a las
            funciones Pro hasta el final del periodo de facturación actual. No
            se realizan reembolsos por periodos parciales.
          </p>
        </section>

        <!-- 5. Uso aceptable -->
        <section>
          <h2 class="text-2xl font-bold mb-4">5. Uso aceptable</h2>
          <p class="text-muted">
            Al utilizar el Servicio, te comprometes a no:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              Utilizar la plataforma para actividades ilegales o no autorizadas.
            </li>
            <li>
              Crear contenido ofensivo, discriminatorio, difamatorio o que viole
              los derechos de terceros.
            </li>
            <li>
              Intentar acceder de forma no autorizada a cuentas, datos o
              sistemas de otros usuarios.
            </li>
            <li>
              Automatizar el acceso al Servicio mediante bots, scrapers u otras
              herramientas no autorizadas.
            </li>
            <li>
              Distribuir virus, malware o cualquier código malicioso a través de
              la plataforma.
            </li>
            <li>
              Utilizar el Servicio para enviar spam o comunicaciones no
              solicitadas.
            </li>
            <li>
              Interferir con el funcionamiento normal del Servicio o de la
              infraestructura que lo soporta.
            </li>
          </ul>
          <p class="text-muted mt-3">
            Nos reservamos el derecho de suspender o eliminar cualquier cuenta o
            contenido que viole estas políticas, sin previo aviso.
          </p>
        </section>

        <!-- 6. Propiedad intelectual -->
        <section>
          <h2 class="text-2xl font-bold mb-4">6. Propiedad intelectual</h2>
          <p class="text-muted">
            El contenido que creas en la plataforma (quizzes, preguntas,
            respuestas) es de tu propiedad. Al utilizar el Servicio, nos otorgas
            una licencia limitada y no exclusiva para almacenar, procesar y
            mostrar tu contenido con el único propósito de proporcionarte el
            Servicio.
          </p>
          <p class="text-muted mt-3">
            Declaras y garantizas que el contenido que creas no infringe
            derechos de propiedad intelectual, de autor ni de cualquier otro
            tipo de derechos de terceros. Eres el único responsable del
            contenido que publicas y de las consecuencias legales que se deriven
            de su uso.
          </p>
          <p class="text-muted mt-3">
            La marca {{ appName }}, su logotipo, diseño, código fuente y todos los
            elementos visuales y funcionales de la plataforma son propiedad de
            {{ appName }} y están protegidos por las leyes de propiedad intelectual
            aplicables. No puedes copiar, modificar, distribuir o crear obras
            derivadas de estos elementos sin nuestro consentimiento previo por
            escrito.
          </p>
          <p class="text-muted mt-3">
            Cualquier sugerencia, idea, mejora o retroalimentación que nos
            proporciones sobre el Servicio podrá ser utilizada por {{ appName }} sin
            obligación de compensación ni atribución.
          </p>
        </section>

        <!-- 7. Privacidad y datos personales -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            7. Privacidad y datos personales
          </h2>
          <p class="text-muted">
            La protección de tus datos personales es una prioridad para
            nosotros. Al utilizar el Servicio, recopilamos y procesamos cierta
            información personal necesaria para su funcionamiento.
          </p>
          <p class="text-muted mt-3">
            Para información completa sobre cómo recopilamos, usamos y
            protegemos tus datos personales, incluyendo tus derechos bajo la
            LFPDPPP (México), el RGPD (Unión Europea) y la CCPA (California),
            consulta nuestra
            <NuxtLink to="/privacy" class="text-primary underline">
              Política de Privacidad</NuxtLink
            >.
          </p>
          <p class="text-muted mt-3">
            Para información sobre las cookies y tecnologías de seguimiento que
            utilizamos, consulta nuestra
            <NuxtLink to="/cookies" class="text-primary underline">
              Política de Cookies</NuxtLink
            >.
          </p>
        </section>

        <!-- 8. Participantes invitados -->
        <section>
          <h2 class="text-2xl font-bold mb-4">8. Participantes invitados</h2>
          <p class="text-muted">
            Los participantes que se unen a sesiones mediante un código de
            acceso no necesitan crear una cuenta. Al participar, aceptan estos
            Términos y otorgan su consentimiento informado para el tratamiento
            de su nombre (o alias) y sus respuestas con el propósito de
            proporcionar resultados al creador de la sesión.
          </p>
          <p class="text-muted mt-3">
            El creador de la sesión actúa como corresponsable del tratamiento de
            datos de sus participantes y es responsable de:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              Informar a sus participantes sobre el uso de la plataforma y el
              tratamiento de sus datos antes de iniciar la sesión.
            </li>
            <li>
              Garantizar que tiene base legal para recopilar las respuestas de
              los participantes.
            </li>
            <li>
              Obtener el consentimiento parental o del tutor legal cuando los
              participantes sean menores de edad.
            </li>
          </ul>
        </section>

        <!-- 9. Disponibilidad -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            9. Disponibilidad del servicio
          </h2>
          <p class="text-muted">
            Nos esforzamos por mantener el Servicio disponible de forma continua
            y confiable. Sin embargo, no garantizamos que el Servicio esté
            disponible en todo momento. Pueden ocurrir interrupciones por
            mantenimiento programado, actualizaciones, problemas técnicos o
            causas de fuerza mayor.
          </p>
          <p class="text-muted mt-3">
            No seremos responsables por pérdidas, daños o inconvenientes
            causados por la indisponibilidad temporal del Servicio.
          </p>
        </section>

        <!-- 10. Limitación de responsabilidad -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            10. Limitación de responsabilidad
          </h2>
          <p class="text-muted">
            El Servicio se proporciona "tal cual" y "según disponibilidad", sin
            garantías de ningún tipo, expresas o implícitas. En la medida máxima
            permitida por la ley aplicable:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              No garantizamos que el Servicio sea ininterrumpido, seguro o libre
              de errores.
            </li>
            <li>
              No somos responsables por la precisión, calidad o legalidad del
              contenido creado por los usuarios.
            </li>
            <li>
              Nuestra responsabilidad total ante cualquier reclamación
              relacionada con el Servicio no excederá el monto que hayas pagado
              en los últimos 12 meses.
            </li>
            <li>
              No seremos responsables por daños indirectos, incidentales,
              especiales o consecuentes derivados del uso del Servicio.
            </li>
          </ul>
        </section>

        <!-- 11. Modificaciones -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            11. Modificaciones a los términos
          </h2>
          <p class="text-muted">
            Nos reservamos el derecho de modificar estos Términos en cualquier
            momento. Cuando realicemos cambios significativos, te notificaremos
            por correo electrónico o mediante un aviso visible en la plataforma
            con al menos 15 días de anticipación.
          </p>
          <p class="text-muted mt-3">
            El uso continuado del Servicio después de la entrada en vigor de los
            cambios constituye tu aceptación de los nuevos Términos. Si no estás
            de acuerdo con los cambios, puedes cancelar tu cuenta antes de que
            entren en vigor.
          </p>
        </section>

        <!-- 12. Cancelación y terminación -->
        <section>
          <h2 class="text-2xl font-bold mb-4">12. Cancelación y terminación</h2>
          <p class="text-muted">
            Puedes cancelar tu cuenta en cualquier momento desde la
            configuración de tu perfil. Al cancelar:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              Si tienes una suscripción activa, mantendrás acceso hasta el final
              del periodo de facturación actual.
            </li>
            <li>
              Tus quizzes, sesiones y resultados se conservarán por 30 días,
              durante los cuales podrás reactivar tu cuenta.
            </li>
            <li>
              Pasados los 30 días, tus datos serán eliminados de forma
              permanente.
            </li>
          </ul>
          <p class="text-muted mt-3">
            Nos reservamos el derecho de suspender o eliminar tu cuenta si
            detectamos una violación de estos Términos, actividades fraudulentas
            o uso indebido de la plataforma.
          </p>
        </section>

        <!-- 13. Derechos de protección de datos -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            13. Derechos de protección de datos
          </h2>
          <p class="text-muted">
            Dependiendo de tu ubicación, cuentas con derechos específicos sobre
            tus datos personales. A continuación se presenta un resumen; para
            información completa, consulta nuestra
            <NuxtLink to="/privacy" class="text-primary underline">
              Política de Privacidad</NuxtLink
            >.
          </p>

          <h3 class="text-lg font-semibold mt-6 mb-2">
            13.1 Derechos ARCO (LFPDPPP — México)
          </h3>
          <p class="text-muted">
            Conforme a la Ley Federal de Protección de Datos Personales en
            Posesión de los Particulares, tienes derecho a:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              <span class="text-default font-medium">Acceso:</span> conocer qué
              datos personales tenemos sobre ti.
            </li>
            <li>
              <span class="text-default font-medium">Rectificación:</span>
              corregir datos inexactos o incompletos.
            </li>
            <li>
              <span class="text-default font-medium">Cancelación:</span>
              solicitar la eliminación de tus datos.
            </li>
            <li>
              <span class="text-default font-medium">Oposición:</span> oponerte
              al tratamiento de tus datos para finalidades específicas.
            </li>
          </ul>
          <p class="text-muted mt-3">
            Las solicitudes deben enviarse a
            <span class="text-default font-medium">soporte@quizzes.app</span>.
            Plazo de respuesta:
            <span class="text-default font-medium">20 días hábiles</span>.
          </p>

          <h3 class="text-lg font-semibold mt-6 mb-2">
            13.2 Derechos RGPD (Unión Europea)
          </h3>
          <p class="text-muted">
            Si te encuentras en la Unión Europea o el Espacio Económico Europeo,
            cuentas con los derechos de acceso, rectificación, supresión,
            portabilidad, limitación del tratamiento, oposición y a no ser
            objeto de decisiones automatizadas. Plazo de respuesta:
            <span class="text-default font-medium">30 días naturales</span>.
            Puedes presentar una reclamación ante la autoridad de protección de
            datos de tu país.
          </p>

          <h3 class="text-lg font-semibold mt-6 mb-2">
            13.3 Derechos CCPA (California)
          </h3>
          <p class="text-muted">
            Si resides en California, tienes derecho a conocer, eliminar y optar
            por no participar en la venta de tus datos. {{ appName }}
            <span class="text-default font-medium"
              >no vende datos personales</span
            >. Tienes derecho a no ser discriminado por ejercer estos derechos.
            Plazo de respuesta:
            <span class="text-default font-medium">45 días naturales</span>.
          </p>
        </section>

        <!-- 14. Usuarios internacionales -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            14. Usuarios internacionales y ley aplicable
          </h2>
          <p class="text-muted">
            El Servicio es operado desde México. Si accedes al Servicio desde
            fuera de México, lo haces por tu propia iniciativa y eres
            responsable de cumplir con las leyes locales aplicables.
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              <span class="text-default font-medium"
                >Usuarios de la Unión Europea:</span
              >
              el tratamiento de datos cumple con el RGPD. Las transferencias
              internacionales de datos se realizan con las garantías adecuadas.
            </li>
            <li>
              <span class="text-default font-medium"
                >Usuarios de California:</span
              >
              se aplican los derechos adicionales previstos en la CCPA.
            </li>
            <li>
              <span class="text-default font-medium"
                >Transferencias de datos:</span
              >
              tus datos pueden ser almacenados y procesados en servidores
              ubicados fuera de tu país de residencia. Al utilizar el Servicio,
              consientes dicha transferencia con las garantías de protección
              descritas en nuestra
              <NuxtLink to="/privacy" class="text-primary underline">
                Política de Privacidad</NuxtLink
              >.
            </li>
          </ul>
        </section>

        <!-- 15. Ley aplicable y jurisdicción -->
        <section>
          <h2 class="text-2xl font-bold mb-4">
            15. Ley aplicable y jurisdicción
          </h2>
          <p class="text-muted">
            Estos Términos se rigen e interpretan conforme a las leyes de los
            Estados Unidos Mexicanos, incluyendo, sin limitación, la Ley Federal
            de Protección de Datos Personales en Posesión de los Particulares
            (LFPDPPP), el Código Civil Federal y la Ley Federal de Protección al
            Consumidor.
          </p>
          <p class="text-muted mt-3">
            Cualquier controversia derivada de estos Términos será sometida a la
            jurisdicción de los tribunales competentes de la Ciudad de México,
            México, renunciando las partes a cualquier otro fuero que pudiera
            corresponderles.
          </p>
          <p class="text-muted mt-3">
            Para usuarios de la Unión Europea: nada en esta cláusula limita tu
            derecho a iniciar procedimientos legales en los tribunales de tu
            país de residencia conforme al RGPD y la legislación de protección
            al consumidor aplicable.
          </p>
        </section>

        <!-- 16. Resolución de disputas -->
        <section>
          <h2 class="text-2xl font-bold mb-4">16. Resolución de disputas</h2>
          <p class="text-muted">
            Antes de iniciar cualquier procedimiento legal, las partes
            intentarán resolver la controversia de manera amistosa:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              <span class="text-default font-medium">Resolución amistosa:</span>
              contacta a
              <span class="text-default font-medium">soporte@quizzes.app</span>
              describiendo la controversia. Intentaremos resolverla en un plazo
              de 30 días naturales.
            </li>
            <li>
              <span class="text-default font-medium"
                >Mediación (usuarios en México):</span
              >
              si no se alcanza una resolución, podrás acudir a la Procuraduría
              Federal del Consumidor (PROFECO) como instancia de mediación.
            </li>
            <li>
              <span class="text-default font-medium"
                >Arbitraje (usuarios internacionales):</span
              >
              las controversias no resueltas se someterán a arbitraje vinculante
              conforme a las reglas de la Cámara de Comercio Internacional
              (ICC), con sede en la Ciudad de México y conducido en español.
            </li>
          </ul>
          <p class="text-muted mt-3">
            Esta cláusula no impide que busques medidas cautelares urgentes ante
            los tribunales competentes cuando sea necesario para proteger tus
            derechos.
          </p>
        </section>

        <!-- 17. Indemnización -->
        <section>
          <h2 class="text-2xl font-bold mb-4">17. Indemnización</h2>
          <p class="text-muted">
            Aceptas indemnizar y mantener indemne a {{ appName }}, su titular y
            colaboradores, frente a cualquier reclamación, daño, pérdida,
            responsabilidad y gasto (incluyendo honorarios legales razonables)
            que surjan de:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>Tu violación de estos Términos.</li>
            <li>El contenido que crees o publiques en la plataforma.</li>
            <li>El uso indebido del Servicio.</li>
            <li>La violación de derechos de terceros.</li>
            <li>
              Tu incumplimiento como creador de sesión respecto a la obtención
              del consentimiento de los participantes.
            </li>
          </ul>
          <p class="text-muted mt-3">
            Esta obligación de indemnización no se aplicará en la medida en que
            esté prohibida por la legislación de protección al consumidor
            aplicable en tu jurisdicción.
          </p>
        </section>

        <!-- 18. Fuerza mayor -->
        <section>
          <h2 class="text-2xl font-bold mb-4">18. Fuerza mayor</h2>
          <p class="text-muted">
            Ninguna de las partes será responsable por el incumplimiento de sus
            obligaciones cuando dicho incumplimiento se deba a causas fuera de
            su control razonable, incluyendo, sin limitación: desastres
            naturales, pandemias, acciones gubernamentales, interrupciones de
            internet, ataques cibernéticos, fallos en la infraestructura de
            terceros u otras circunstancias de fuerza mayor.
          </p>
        </section>

        <!-- 19. Divisibilidad -->
        <section>
          <h2 class="text-2xl font-bold mb-4">19. Divisibilidad</h2>
          <p class="text-muted">
            Si alguna disposición de estos Términos es declarada inválida,
            ilegal o inaplicable por un tribunal competente, dicha disposición
            será modificada en la medida mínima necesaria para hacerla válida y
            aplicable. Las disposiciones restantes continuarán en pleno vigor y
            efecto.
          </p>
        </section>

        <!-- 20. Acuerdo completo -->
        <section>
          <h2 class="text-2xl font-bold mb-4">20. Acuerdo completo</h2>
          <p class="text-muted">
            Estos Términos y Condiciones, junto con la
            <NuxtLink to="/privacy" class="text-primary underline">
              Política de Privacidad
            </NuxtLink>
            y la
            <NuxtLink to="/cookies" class="text-primary underline">
              Política de Cookies</NuxtLink
            >, constituyen el acuerdo completo entre tú y {{ appName }} respecto al
            uso del Servicio, y reemplazan cualquier acuerdo previo, ya sea oral
            o escrito.
          </p>
          <p class="text-muted mt-3">
            La falta de ejercicio o el retraso en el ejercicio de cualquier
            derecho previsto en estos Términos no constituye una renuncia a
            dicho derecho.
          </p>
        </section>

        <!-- 21. Contacto -->
        <section>
          <h2 class="text-2xl font-bold mb-4">21. Contacto</h2>
          <p class="text-muted">
            Si tienes preguntas sobre estos Términos y Condiciones, puedes
            contactarnos a través de:
          </p>
          <ul class="list-disc list-inside text-muted mt-3 space-y-1">
            <li>
              Correo electrónico:
              <span class="text-default font-medium">soporte@quizzes.app</span>
            </li>
            <li>A través de la sección de ayuda dentro de la plataforma.</li>
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
