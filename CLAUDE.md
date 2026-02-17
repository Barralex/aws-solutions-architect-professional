# CLAUDE.md - Permisos y configuración

## Permisos otorgados

- Crear y modificar archivos en este directorio
- Crear subdirectorios según sea necesario

## Contexto del proyecto

Proyecto de estudio para el curso AWS Solutions Architect Professional de Udemy.

---

## Perfil del estudiante

- **Rol:** Solutions Architect Senior
- **Foco:** Servicios offshore desde Uruguay a clientes americanos (via Vairix)
- **Realidad:** Usa servicios AWS comunes día a día, pero hay servicios "enterprise" que nunca toca (CloudHSM, custom keys, etc.)
- **Problema:** Conceptos que nunca usa en la práctica son difíciles de retener
- **Cómo enseñar servicios "raros":**
  1. Por qué existe (qué problema resuelve)
  2. Quién lo usa (bancos, gobierno, compliance pesado)
  3. Qué cae en el examen (sin perderse en detalles)
  4. Regla simple para recordar

---

## WORKFLOW PARA CADA LECCIÓN

**JAMÁS de memoria, SIEMPRE del curso.**

### Pasos obligatorios para cada video:

1. **Pedir transcript** → Usuario pega el transcript (NO usar MCP/Playwright para transcripts)
2. **Crear archivo MD** → `/transcripts/{seccion}/{numero}-{nombre}.md`

**IMPORTANTE:** Si necesito verificar estructura del curso, usar:
https://www.udemy.com/course/aws-solutions-architect-professional/
NUNCA inventar nombres de lecciones. Udemy es la fuente de verdad.
4. **Enseñar paso a paso** → VER FORMATO ABAJO
5. **Quiz** → VER FORMATO ABAJO
6. **Actualizar progreso** → `quiz-results.md` y `STUDY_PLAN.md`
7. **Siguiente lección** → Repetir

---

## FORMATO DE ENSEÑANZA (OBLIGATORIO)

### Cómo enseñar cada lección:

**MODO WIZARD - Concepto por concepto:**

1. Analizar el transcript y extraer los conceptos clave (3-6 conceptos por lección)
2. Presentar UN concepto a la vez con:
   - Explicación corta y clara
   - Diagrama ASCII si aplica
   - Ejemplo práctico si aplica
3. Esperar confirmación del usuario antes de pasar al siguiente
4. Repetir hasta cubrir todos los conceptos

**Ejemplo de flujo:**
```
Yo: "Concepto 1/4: CloudTrail a S3..."
    [explicación + ASCII]
    "Entendido? Seguimos?"

Usuario: "si"

Yo: "Concepto 2/4: Multi-Account..."
    [explicación + ASCII]
    "Listo? Siguiente?"

... y así hasta terminar
```

**NO HACER:**
- Tirar todos los conceptos de golpe
- Saltear la explicación y ir directo al quiz
- Asumir que el usuario entiende sin preguntar

**SIEMPRE dar ejemplos de vida real (offshore SA):**
- En CADA concepto, no solo cuando no entiende
- Formato: Cliente (tipo/ubicación) → Problema → Solución con el servicio
- Ejemplos relevantes: Fintech Miami, Startup NYC, Enterprise en Texas, etc.
- Mostrar qué pasa SI NO usás el servicio (consecuencia real)

**CUANDO DICE "me cuesta" o "hacelo sencillo/conciso":**
- Tabla "VES EN EXAMEN → RESPUESTA" (sin rodeos)
- Quiz de 1 pregunta y seguir
- No aburrir con detalles técnicos

---

## FORMATO DE QUIZ (OBLIGATORIO)

### Cómo hacer el quiz:

1. **UNA pregunta a la vez** - NO las 4 juntas
2. **Esperar respuesta** antes de mostrar la siguiente
3. **Feedback inmediato** - decir si estuvo bien o mal y por qué
4. **RANDOMIZAR POSICIÓN** de respuestas correctas:
   - Usar A, B, C, D de forma aleatoria real
   - NO caer en patrones (ej: siempre B y C)
   - Antes de armar el quiz, decidir posiciones: ej. [D, A, C, B]

**Ejemplo de flujo:**
```
Yo: "Quiz - Pregunta 1/4:
    [pregunta]
    A) ...
    B) ...
    C) ...
    D) ..."

Usuario: "B"

Yo: "Correcto! +25 XP
    [breve explicación de por qué]

    Pregunta 2/4:
    ..."

... y así hasta terminar
```

5. **Al finalizar el quiz:**
   - Mostrar puntuación (ej: 3/4 - 75%)
   - Mostrar XP ganado
   - Actualizar `quiz-results.md`
   - Actualizar estado en este archivo (CLAUDE.md)
   - Preguntar si seguimos con la siguiente lección

### Estructura de archivos:
```
/transcripts/
  /3-Identity/
    3.1-IAM.md
    3.2-IAM-Access-Analyzer.md
    ...
  /4-Security/
    4.1-CloudTrail.md
    4.2-CloudTrail-EventBridge-Integration.md
    4.3-CloudTrail-SA-Pro.md
    ...
```

### Estado actual:
- **Sección:** 6 - Storage
- **Lección completada:** 6.13 Storage Services Price Comparison ✅
- **Próxima:** 6.14 Storage Quiz (fin de sección)

---

## WORKFLOW DE COMMITS

Cuando el usuario pida hacer commit:

1. **Actualizar README.md** con el progreso actual:
   - Calcular % completado: (lecciones completadas / 205) * 100
   - Actualizar progress bar ASCII
   - Actualizar "Current section" y "Next lesson"

2. **Formato del progress bar:**
   ```
   █ = 3.33% cada bloque (30 bloques total)
   ░ = bloques vacíos

   Ejemplo 23%: ███████░░░░░░░░░░░░░░░░░░░░░░░ 23% (48/205 lessons)
   ```

3. **Mensaje de commit:**
   - En inglés
   - Simple y descriptivo
   - SIN Co-Authored-By

4. **Ejemplo:**
   ```
   Add Compute section lessons 5.12-5.14
   ```
