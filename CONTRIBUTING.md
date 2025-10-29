# Contribuciones a InnerSource BCP

¡Gracias por tu interés en contribuir a InnerSource BCP! Este documento proporciona una guía sobre cómo puedes contribuir de manera efectiva al proyecto.

## Proceso de Contribución

1. **Fork del Repositorio:**
   - Ve al repositorio de InnerSource BCP en GitHub.
   - Haz clic en el botón "Fork" en la parte superior derecha de la página para crear una copia del repositorio en tu cuenta de GitHub.

2. **Clona tu Fork:**
   - Abre tu terminal y clona tu fork localmente:
     ```bash
     git clone https://github.com/tu-usuario/atla-atla-innersource-portal.git
     cd atla-atla-innersource-portal
     ```

3. **Crea una Nueva Rama:**
   - Crea una nueva rama para tu contribución. Usa un nombre descriptivo que refleje el cambio que estás realizando:
     ```bash
     git checkout -b nombre-de-tu-rama
     ```

4. **Realiza tus Cambios:**
   - Haz los cambios necesarios en el código. Asegúrate de seguir las pautas de estilo y las mejores prácticas del proyecto.

5. **Agrega y Confirma tus Cambios:**
   - Agrega los archivos modificados a tu commit:
     ```bash
     git add .
     ```
   - Realiza un commit con un mensaje claro y descriptivo:
     ```bash
     git commit -m "Descripción clara de los cambios realizados"
     ```

6. **Sincroniza tu Fork:**
   - Antes de enviar tu pull request, asegúrate de que tu fork esté actualizado con la rama principal del repositorio original:
     ```bash
     git fetch upstream
     git checkout main
     git merge upstream/main
     git checkout nombre-de-tu-rama
     ```

7. **Envía un Pull Request:**
   - Ve a tu fork en GitHub y haz clic en "Pull Requests".
   - Haz clic en "New Pull Request" y selecciona tu rama.
   - Asegúrate de que la base sea la rama principal del repositorio original.
   - Proporciona una descripción detallada de los cambios y por qué son necesarios.

8. **Revisión del Pull Request:**
   - Tu pull request será revisado por al menos dos miembros del equipo de Framework Backend.
   - Esté preparado para recibir comentarios y realizar cambios adicionales si es necesario.

9. **Fusión del Pull Request:**
   - Una vez que tu pull request haya sido aprobado, será fusionado en la rama principal del repositorio.

10. **Elimina tu Rama:**
    - Después de que tu pull request haya sido fusionado, puedes eliminar la rama que creaste:
      ```bash
      git branch -d nombre-de-tu-rama
      ```

## Pautas de Contribución

- Asegúrate de seguir las pautas de estilo del código y las mejores prácticas del proyecto.
- Escribe pruebas unitarias para cualquier nueva funcionalidad que agregues.
- Mantén la documentación actualizada si realizas cambios en la funcionalidad.

## Contacto

Si tienes preguntas o necesitas ayuda, no dudes en contactar al equipo de Framework Backend a través de [frameworkbackendatlas@bcp.com.pe](mailto:frameworkbackendatlas@bcp.com.pe).

¡Gracias por contribuir a InnerSource BCP!