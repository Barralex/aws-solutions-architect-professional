# Quiz Results - AWS SAP-C02

**Total XP:** 925
**Lecciones completadas:** 11/205

---

## Sección 3: Identity & Federation

### 3.1 IAM - Identity & Access Management
**Estado:** ✅ Completado
**Fecha:** 2026-02-05

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Lambda cross-account (DynamoDB A + S3 B) | B - Resource-Based Policy | ✅ +25 XP |
| 2 | Delegación sin escalada de privilegios | B - Permission Boundary | ✅ +25 XP |
| 3 | Todo excepto IAM + excepción | B - NotAction + Allow | ✅ +25 XP |
| 4 | Qué necesita el ROL para cross-account | A (incorrecto) → C - Trust Policy | ❌ |

**Puntuación:** 3/4 (75%) ✅ APROBADO
**XP ganado:** 75

#### Conceptos dominados:
- [x] Diferencia AssumeRole vs Resource-Based Policy
- [x] Permission Boundaries
- [x] NotAction vs Deny
- [ ] Trust Policies ← REPASAR

#### Notas de repaso:
- Cross-account: Si necesitas permisos en AMBAS cuentas → Resource-Based Policy
- AssumeRole = pierdes permisos originales

---

### 3.2 IAM Access Analyzer
**Estado:** ✅ Completado
**Fecha:** 2026-02-05

#### Quiz (3 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Qué significa un Finding | B - Acceso desde fuera de zona confianza | ✅ +25 XP |
| 2 | Feature para generar políticas least privilege | C - Policy Generation | ✅ +25 XP |
| 3 | Diferencia Advisor vs Analyzer | B - Advisor permisos, Analyzer acceso externo | ✅ +25 XP |

**Puntuación:** 3/3 (100%) ✅ PERFECTO
**XP ganado:** 75

#### Conceptos dominados:
- [x] Zone of Trust y Findings
- [x] Policy Generation con CloudTrail
- [x] Diferencia Access Advisor vs Access Analyzer

---

### 3.5 AWS Directory Services
**Estado:** ✅ Completado
**Fecha:** 2026-02-05

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Banco con usuarios solo on-premise | B - AD Connector | ✅ +25 XP |
| 2 | Startup sin datacenter, bajo costo | C - Simple AD | ✅ +25 XP |
| 3 | RDS SQL Server con AD | B (incorrecto) → A - Managed AD | ❌ |
| 4 | AD Connector si cae VPN | C - No pueden autenticarse | ✅ +25 XP |

**Puntuación:** 3/4 (75%) ✅ APROBADO
**XP ganado:** 75

#### Conceptos dominados:
- [x] AD Connector para usuarios on-premise
- [x] Simple AD para empresas chicas
- [x] AD Connector falla sin VPN
- [ ] RDS SQL Server solo con Managed AD ← REPASAR

---

### 3.4 Identity Federation & Cognito
**Estado:** ✅ Completado
**Fecha:** 2026-02-05

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Empleados con Active Directory | B - SAML 2.0 con ADFS | ✅ +25 XP |
| 2 | App mobile login con Google | C - Cognito | ✅ +25 XP |
| 3 | Restringir acceso S3 por usuario | B - Variables de política | ✅ +25 XP |
| 4 | Por qué Token Vending Machine | B - Intercambia tokens por creds | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ✅ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] SAML 2.0 para entornos corporativos
- [x] Cognito para apps web/mobile
- [x] Variables de política IAM
- [x] Token Vending Machine concept

---

### 3.3 STS - Security Token Service
**Estado:** ✅ Completado
**Fecha:** 2026-02-05

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Protección Confused Deputy (terceros) | B - External ID | ✅ +25 XP |
| 2 | Filtrar acceso por equipo en S3 | C - Session Tags + PrincipalTag | ✅ +25 XP |
| 3 | API para login con Active Directory | D (incorrecto) → C - AssumeRoleWithSAML | ❌ |
| 4 | Qué pasa con permisos al AssumeRole | C - Los pierde temporalmente | ✅ +25 XP |

**Puntuación:** 3/4 (75%) ✅ APROBADO
**XP ganado:** 75

#### Conceptos dominados:
- [x] External ID y Confused Deputy Attack
- [x] Session Tags para ABAC
- [x] AssumeRole pierde permisos originales
- [ ] APIs de STS (SAML vs FederationToken) ← REPASAR

---

### 3.6 AWS Organizations
**Estado:** ✅ Completado
**Fecha:** 2026-02-06

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Cuenta invitada no puede ser administrada | B - Crear OrganizationAccountAccessRole manual | ✅ +25 XP |
| 2 | Volver de All Features a Consolidated Billing | C - No hay vuelta atrás | ✅ +25 XP |
| 3 | RI sharing con una cuenta OFF | B - Ambas deben tener ON | ✅ +25 XP |
| 4 | Mover cuenta entre organizaciones | B - Invitar + aceptar | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] OrganizationAccountAccessRole (auto vs manual)
- [x] Feature modes (Consolidated Billing vs All Features)
- [x] RI sharing entre cuentas
- [x] Migración de cuentas entre orgs

---

### 3.7 AWS Organizations Policies (SCPs)
**Estado:** ⚠️ Repasar
**Fecha:** 2026-02-06

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | SCP Deny en Management Account | A (incorrecto) → B - No le aplica | ❌ |
| 2 | Condición para bloquear regiones | C (incorrecto) → B - aws:RequestedRegion | ❌ |
| 3 | Herencia de Deny en OU | B - Todo menos S3 | ✅ +25 XP |
| 4 | Backup centralizado inmutable | C - Backup Policy | ✅ +25 XP |

**Puntuación:** 2/4 (50%) ❌ NO APROBADO
**XP ganado:** 50

#### Conceptos dominados:
- [x] Herencia de SCPs (Deny baja)
- [x] Backup Policies inmutables
- [ ] Management Account ignora SCPs ← REPASAR
- [ ] aws:RequestedRegion para regiones ← REPASAR

---

### 3.8 AWS IAM Identity Center
**Estado:** ✅ Completado
**Fecha:** 2026-02-06

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | SSO para 15 cuentas AWS en Organizations | B - IAM Identity Center | ✅ +25 XP |
| 2 | Startup sin AD, dónde crear usuarios | C - Identity Store built-in | ✅ +25 XP |
| 3 | Qué pasa al asignar Permission Set | B - Se crea IAM Role automático | ✅ +25 XP |
| 4 | App mobile con login Google/Facebook | A - Amazon Cognito | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] IAM Identity Center = SSO múltiples cuentas AWS
- [x] Identity Store built-in vs IdP externo
- [x] Permission Sets crean IAM Roles automáticos
- [x] Cognito para apps, Identity Center para empleados

---

### 3.9 AWS Control Tower
**Estado:** ✅ Completado
**Fecha:** 2026-02-06

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Relación Control Tower y Organizations | D - Control Tower corre encima de Organizations | ✅ +25 XP |
| 2 | Qué usa Account Factory internamente | B - AWS Service Catalog | ✅ +25 XP |
| 3 | Detectar recursos sin tags | C - Detectivo con AWS Config | ✅ +25 XP |
| 4 | Guardrail Mandatory | D - Siempre activo, no se desactiva | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] Control Tower corre encima de Organizations
- [x] Account Factory usa Service Catalog
- [x] Detectivo = Config / Preventivo = SCP
- [x] Mandatory = siempre activo, no se desactiva

---

### 3.10 AWS Resource Access Manager (RAM)
**Estado:** ✅ Completado
**Fecha:** 2026-02-06

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Múltiples cuentas en misma red | A - RAM compartir subnets | ✅ +25 XP |
| 2 | Qué NO se puede compartir | B (incorrecto) → C - Security Groups | ❌ |
| 3 | Qué puede hacer Account A con EC2 de Account B | C - Nada, no ve recursos ajenos | ✅ +25 XP |
| 4 | Gestión centralizada de CIDRs | D - Managed Prefix List | ✅ +25 XP |

**Puntuación:** 3/4 (75%) ✅ APROBADO
**XP ganado:** 75

#### Conceptos dominados:
- [x] RAM para compartir subnets entre cuentas
- [x] Cuentas no ven recursos de otras cuentas
- [x] Prefix List = gestión centralizada de CIDRs
- [ ] Security Groups NO se pueden compartir ← REPASAR

---

## Sección 4: Security

### 4.1 CloudTrail
**Estado:** ✅ Completado
**Fecha:** 2026-02-06

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Dónde buscar quién borró DynamoDB | C - CloudTrail | ✅ +25 XP |
| 2 | Por qué no se ven GetObject en S3 | B - Data Events manuales | ✅ +25 XP |
| 3 | Detectar picos anormales de API calls | D - CloudTrail Insights | ✅ +25 XP |
| 4 | Retención 7 años para compliance | C - S3 + Athena | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] CloudTrail para auditoría de API calls
- [x] Data Events vs Management Events
- [x] CloudTrail Insights para anomalías
- [x] S3 + Athena para retención largo plazo

---

## Historial de sesiones

| Fecha | Sección | Lección | XP | Resultado |
|-------|---------|---------|----|-----------|
| 2026-02-05 | 3 | 3.1 IAM | 75 | ✅ Aprobado (75%) |
| 2026-02-05 | 3 | 3.2 IAM Access Analyzer | 75 | ✅ Perfecto (100%) |
| 2026-02-05 | 3 | 3.3 STS | 75 | ✅ Aprobado (75%) |
| 2026-02-05 | 3 | 3.4 Identity Federation & Cognito | 100 | ✅ Perfecto (100%) |
| 2026-02-05 | 3 | 3.5 Directory Services | 75 | ✅ Aprobado (75%) |
| 2026-02-06 | 3 | 3.6 AWS Organizations | 100 | ⭐ Perfecto (100%) |
| 2026-02-06 | 3 | 3.7 Organizations Policies | 50 | ❌ Repasar (50%) |
| 2026-02-06 | 3 | 3.8 IAM Identity Center | 100 | ⭐ Perfecto (100%) |
| 2026-02-06 | 3 | 3.9 Control Tower | 100 | ⭐ Perfecto (100%) |
| 2026-02-06 | 3 | 3.10 RAM | 75 | ✅ Aprobado (75%) |
| 2026-02-06 | 4 | 4.1 CloudTrail | 100 | ⭐ Perfecto (100%) |

