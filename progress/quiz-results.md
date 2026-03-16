# Quiz Results - AWS SAP-C02

**Total XP:** 5475
**Lecciones completadas:** 143/205

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

### 4.3 CloudTrail - SA Pro
**Estado:** ✅ Completado
**Fecha:** 2026-02-08

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Detectar muchas API calls denegadas | C - CloudWatch Logs + Metric Filter | ✅ +25 XP |
| 2 | Dónde crear Organization Trail | D - Management Account | ✅ +25 XP |
| 3 | Reaccionar inmediatamente a TerminateInstances | C - EventBridge | ✅ +25 XP |
| 4 | Centralizar logs multi-account | C - S3 Bucket Policy | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] CloudTrail a S3 con mejoras (Object Lock, Versioning, etc)
- [x] Multi-account = S3 Bucket Policy
- [x] Organization Trail en Management Account
- [x] EventBridge para reacción inmediata, CloudWatch Logs para contar/anomalías, S3 para largo plazo

---

### 4.4 KMS - Key Management Service
**Estado:** ✅ Completado
**Fecha:** 2026-02-08

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Startup sin compliance, qué clave usar | B (incorrecto) → C - Customer/AWS Managed | ❌ |
| 2 | Banco con control de hardware | D - CloudHSM | ✅ +25 XP |
| 3 | Multi-región sin re-cifrar | C - Multi-Region Key | ✅ +25 XP |
| 4 | BYOK afirmación FALSA | C - No compatible con CloudHSM | ✅ +25 XP |

**Puntuación:** 3/4 (75%) ✅ APROBADO
**XP ganado:** 75

#### Conceptos dominados:
- [x] Simétrica vs Asimétrica
- [x] CloudHSM para control total de hardware
- [x] Multi-Region Keys para cifrar/descifrar cross-region
- [x] BYOK solo simétrica 256-bit, no compatible con CloudHSM
- [ ] AWS Owned Keys no se eligen, son internas ← REPASAR

---

### 4.5 Parameter Store (SSM)
**Estado:** ✅ Completado
**Fecha:** 2026-02-08

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Permisos para parámetro encriptado | A (incorrecto) → C - SSM + KMS | ❌ |
| 2 | AMI actualizado en CloudFormation | B - Public Parameters | ✅ +25 XP |
| 3 | Expiración y notificación | C - Advanced + Parameter Policy | ✅ +25 XP |
| 4 | Migrar a Secrets Manager sin cambiar código | B - /aws/reference/secretsmanager/ | ✅ +25 XP |

**Puntuación:** 3/4 (75%) ✅ APROBADO
**XP ganado:** 75

#### Conceptos dominados:
- [x] Jerarquía de parámetros por paths
- [x] Public Parameters para AMIs
- [x] Standard vs Advanced (policies solo en Advanced)
- [x] Reference a Secrets Manager desde Parameter Store
- [ ] Parámetros encriptados necesitan SSM + KMS ← REPASAR

---

### 4.6 Secrets Manager
**Estado:** ✅ Completado
**Fecha:** 2026-02-08

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Rotar RDS password automáticamente | B - Secrets Manager | ✅ +25 XP |
| 2 | Compartir secreto cross-account | C - Resource Policy + KMS Policy | ✅ +25 XP |
| 3 | Cómo ECS inyecta secretos | B - Env vars al boot | ✅ +25 XP |
| 4 | Diferencia SM vs PS | B - Rotación automática | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] Rotación automática con Lambda incluida (RDS/Redshift/DocumentDB)
- [x] Cross-account = Resource Policy + KMS Policy (NO RAM)
- [x] ECS inyecta secretos como env vars al boot
- [x] SM vs PS: rotación automática es la diferencia clave

---

### 4.7 RDS Security
**Estado:** ✅ Completado
**Fecha:** 2026-02-08

#### Quiz (3 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | TDE para qué engines | B (incorrecto) → C - Oracle/SQL Server | ❌ |
| 2 | IAM auth para qué engines | C - MySQL/PostgreSQL/MariaDB | ✅ +25 XP |
| 3 | Ver queries en RDS | C - Herramientas DB específicas | ✅ +25 XP |

**Puntuación:** 2/3 (67%) ✅ APROBADO
**XP ganado:** 50

#### Conceptos dominados:
- [x] IAM auth solo MySQL, PostgreSQL, MariaDB
- [x] CloudTrail no trackea queries de RDS
- [ ] TDE solo Oracle y SQL Server ← REPASAR

---

### 4.8 SSL Encryption, SNI & MITM
**Estado:** ✅ Completado
**Fecha:** 2026-02-08

#### Quiz (3 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Múltiples SSL en un LB | B - ALB con SNI | ✅ +25 XP |
| 2 | CLB con 3 apps SSL | B - 3 CLBs separados | ✅ +25 XP |
| 3 | Protección MITM | C - HTTPS + DNSSEC | ✅ +25 XP |

**Puntuación:** 3/3 (100%) ⭐ PERFECTO
**XP ganado:** 75

#### Conceptos dominados:
- [x] SNI = múltiples SSL certs en un LB
- [x] ALB/NLB/CloudFront tienen SNI, CLB no
- [x] MITM prevention = HTTPS + DNSSEC

---

### 4.9 AWS Certificate Manager (ACM)
**Estado:** ✅ Completado
**Fecha:** 2026-02-08

#### Quiz (3 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | ALBs en 3 regiones | B - 3 certs | ✅ +25 XP |
| 2 | Cert subido manualmente | A (incorrecto) → C - Renewal manual | ❌ |
| 3 | CloudFront global | C - Un solo cert | ✅ +25 XP |

**Puntuación:** 2/3 (67%) ✅ APROBADO
**XP ganado:** 50

#### Conceptos dominados:
- [x] ACM es regional, un cert por región
- [x] CloudFront es global, un solo cert
- [ ] Cert subido = renewal manual ← REPASAR

---

### 4.10 CloudHSM
**Estado:** ✅ Completado
**Fecha:** 2026-02-08

#### Quiz (3 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Perdiste las keys | C - AWS no puede hacer nada | ✅ +25 XP |
| 2 | HA para CloudHSM | D (incorrecto) → B - Mínimo 2 HSMs en 2 AZs | ❌ |
| 3 | Gestionar usuarios | C - Dentro del HSM | ✅ +25 XP |

**Puntuación:** 2/3 (67%) ✅ APROBADO
**XP ganado:** 50

#### Conceptos dominados:
- [x] AWS no recupera keys perdidas
- [x] Usuarios se manejan dentro del HSM (no IAM)
- [ ] HA = mínimo 2 HSMs en 2 AZs (manual, no automático) ← REPASAR

---

### 4.11 Solution Architecture - SSL on ALB
**Estado:** ✅ Completado
**Fecha:** 2026-02-08

#### Quiz (3 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Más seguro, key no expuesta | C - CloudHSM offloading | ✅ +25 XP |
| 2 | Simple y escalable | C - ALB + ACM | ✅ +25 XP |
| 3 | Cert para EC2 directo | A (incorrecto) → B - SSM Parameter Store | ❌ |

**Puntuación:** 2/3 (67%) ✅ APROBADO
**XP ganado:** 50

#### Conceptos dominados:
- [x] CloudHSM offloading = más seguro (key nunca sale)
- [x] ALB + ACM = simple y escalable
- [ ] ACM no exporta certs, EC2 usa SSM ← REPASAR

---

### 4.12 S3 Security
**Estado:** ⚠️ Repasar
**Fecha:** 2026-02-08

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | SSE-KMS bucket público | A (incorrecto) → B - No puede leer sin KMS | ❌ |
| 2 | Forzar HTTPS | B (incorrecto) → C - aws:SecureTransport | ❌ |
| 3 | VPC Endpoint condition | D (incorrecto) → B - aws:SourceVpc | ❌ |
| 4 | Compliance no delete | C - Object Lock WORM | ✅ +25 XP |

**Puntuación:** 1/4 (25%) ❌ NO APROBADO
**XP ganado:** 25

#### Conceptos a REPASAR:
- [ ] SSE-KMS protege aunque bucket sea público
- [ ] aws:SecureTransport para forzar HTTPS
- [ ] aws:SourceVpc / aws:SourceVpce para VPC endpoints
- [ ] aws:SourceIp es solo para IP públicas
- [x] Object Lock = WORM para compliance

---

### 4.13 S3 Access Points
**Estado:** ✅ Completado
**Fecha:** 2026-02-08

#### Quiz (2 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Simplificar bucket policy | B - S3 Access Points | ✅ +25 XP |
| 2 | VPC origin necesita | C - VPC Endpoint | ✅ +25 XP |

**Puntuación:** 2/2 (100%) ⭐ PERFECTO
**XP ganado:** 50

#### Conceptos dominados:
- [x] Access Points = simplificar bucket policies complejas
- [x] Cada AP tiene su DNS y policy
- [x] VPC origin requiere VPC Endpoint

---

### 4.14 S3 Multi-Region Access Points
**Estado:** ✅ Completado
**Fecha:** 2026-02-08

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Global users, low latency, single endpoint | C - MRAP con CRR | ✅ +25 XP |
| 2 | Componente obligatorio | B - Cross-Region Replication bidireccional | ✅ +25 XP |
| 3 | Virginia falla, qué pasa | B - Ruteo automático a Ireland | ✅ +25 XP |
| 4 | Diferencia AP vs MRAP | B - AP un bucket, MRAP múltiples regiones | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] MRAP = un endpoint global, múltiples buckets
- [x] Requiere S3 Cross-Region Replication bidireccional
- [x] Ruteo automático por latencia
- [x] Failover automático si región falla

---

### 4.15 S3 Object Lambda
**Estado:** ✅ Completado
**Fecha:** 2026-02-08

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Redactar PII sin duplicar bucket | A - S3 Object Lambda | ✅ +25 XP |
| 2 | Componentes necesarios | D - Bucket + AP + Lambda + Object Lambda AP | ✅ +25 XP |
| 3 | Diferencia AP vs Object Lambda | A - Permisos vs transformar contenido | ✅ +25 XP |
| 4 | Watermark personalizado por usuario | C - S3 Object Lambda | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] Object Lambda = middleware que transforma al vuelo
- [x] Requiere: Bucket + Access Point + Lambda + Object Lambda Access Point
- [x] Access Points = permisos, Object Lambda = transformación
- [x] Casos: redactar PII, enriquecer, watermark, resize, convertir formatos

---

### 4.16 DDoS and AWS Shield
**Estado:** ✅ Completado
**Fecha:** 2026-02-08

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Protección default sin presupuesto | B (incorrecto) → D - Shield Standard | ❌ |
| 2 | Cost protection durante DDoS | A - Shield Advanced | ✅ +25 XP |
| 3 | Dónde se filtra antes de llegar a región | C - CloudFront + Route 53 (Edge) | ✅ +25 XP |
| 4 | Diferencia Shield vs WAF | B - Shield DDoS L3/L4, WAF reglas L7 | ✅ +25 XP |

**Puntuación:** 3/4 (75%) ✅ APROBADO
**XP ganado:** 75

#### Conceptos dominados:
- [x] Shield Advanced = $3K/mes, cost protection, 24/7 DRT
- [x] CloudFront + Route 53 = Shield en el edge
- [x] Shield = anti-DDoS, WAF = filtro por reglas L7
- [ ] Shield Standard = gratis y ON por default ← REPASAR

---

### 10.14 Amazon QuickSight
**Estado:** ✅ Completado
**Fecha:** 2026-02-28

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Dashboards interactivos sobre Redshift | C - Amazon QuickSight | ✅ +25 XP |
| 2 | In-memory engine con data importada | D - SPICE Engine | ✅ +25 XP |
| 3 | Ocultar columnas por usuario | C - Enterprise + CLS | ✅ +25 XP |
| 4 | Dashboard lento conectado directo a Redshift | C - SPICE no se activa sin importar | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] QuickSight = BI serverless, dashboards
- [x] SPICE = in-memory, solo con data importada
- [x] Users/Groups ≠ IAM users
- [x] CLS = Enterprise only

---

## Sección 11: Monitoring

### 11.1 CloudWatch
**Estado:** ✅ Completado
**Fecha:** 2026-03-02

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | EC2 crítica sin ASG, recover automático | B - CloudWatch Alarm → EC2 Recover Action | ✅ +25 XP |
| 2 | API 200 OK pero datos incorrectos | D - CloudWatch Synthetics Canary | ✅ +25 XP |
| 3 | Monitorear RAM en EC2 | C - CloudWatch Unified Agent + custom metric | ✅ +25 XP |
| 4 | Dashboard multi-region | B - Un solo dashboard multi-region | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] EC2 Recover Action mantiene IPs y metadata
- [x] Synthetics Canary valida contenido, no solo status code
- [x] RAM no es métrica built-in, necesita Unified Agent
- [x] Dashboards soportan múltiples regiones nativo

---

### 11.2 CloudWatch Logs
**Estado:** ✅ Completado
**Fecha:** 2026-03-02

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Logs a S3 con max 1 min delay | B - Subscription Filter → Firehose → S3 | ✅ +25 XP |
| 2 | Centralizar logs 5 cuentas multi-region | C - Sub Filter → KDS central → Firehose → S3 | ✅ +25 XP |
| 3 | Alerta por email con >50 errores 500 en 5 min | C - Metric Filter → Alarm → SNS | ✅ +25 XP |
| 4 | CW Agent siempre instalado en 200+ EC2 | C - SSM State Manager | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] CreateExportTask = batch, hasta 12h delay, NO real-time
- [x] Subscription Filter → Firehose para near-real-time a S3
- [x] Multi-account aggregation: Sub Filter → KDS → Firehose → S3
- [x] Metric Filter para crear métricas desde patrones en logs
- [x] SSM State Manager para compliance continuo del agent

---

### 11.3 Amazon EventBridge
**Estado:** ✅ Completado
**Fecha:** 2026-03-02

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Bug viernes, eventos procesados OK pero mal, reprocesar | C - EventBridge Archive & Replay | ✅ +25 XP |
| 2 | Auth0 bloquea usuario, revocar permisos AWS | C - Partner Event Bus → Rule → Lambda | ✅ +25 XP |
| 3 | Detectar root login centralizado en 6 cuentas | C - PutEvents al Central Event Bus con resource-based policy | ✅ +25 XP |
| 4 | App custom genera eventos → Step Functions | C - Custom Event Bus con PutEvents API | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] Archive & Replay para reprocesar eventos (no DLQ)
- [x] Partner Event Bus para SaaS (Zendesk, Auth0, Datadog)
- [x] Custom Event Bus + PutEvents para apps propias
- [x] Resource-Based Policy para central event bus cross-account

---

### 11.4 AWS X-Ray
**Estado:** ✅ Completado
**Fecha:** 2026-03-02

#### Quiz (2 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Encontrar cuello de botella en cadena de microservicios | C - AWS X-Ray | ✅ +25 XP |
| 2 | Habilitar X-Ray en Lambda y ECS | B - Lambda: tick casilla, ECS: agent/sidecar | ✅ +25 XP |

**Puntuación:** 2/2 (100%) ⭐ PERFECTO
**XP ganado:** 50

#### Conceptos dominados:
- [x] X-Ray = distributed tracing entre microservicios
- [x] Lambda = checkbox, ECS = agent/sidecar, EC2 = agent, Beanstalk = auto
- [x] "Distributed tracing" en examen → X-Ray

---

### 11.5 AWS Health Dashboard
**Estado:** ✅ Completado
**Fecha:** 2026-03-02

#### Quiz (2 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Health events de 20 cuentas en un solo lugar | C - Health Dashboard + Organizations | ✅ +25 XP |
| 2 | Personal Health → EventBridge, Service Health → ? | B - Service Health solo via RSS | ✅ +25 XP |

**Puntuación:** 2/2 (100%) ⭐ PERFECTO
**XP ganado:** 50

#### Conceptos dominados:
- [x] Personal Health Dashboard = tus recursos, va a EventBridge
- [x] Service Health Dashboard = público, solo RSS
- [x] Organizations = vista agregada de todas las cuentas
- [x] Health API para acceso programático

---

## Sección 12: Deployment and Instance Management

### 12.5 SAM (Serverless Application Model)
**Estado:** ✅ Completado
**Fecha:** 2026-03-06

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Framework serverless con YAML y test local | C - SAM | ✅ +25 XP |
| 2 | Qué usa SAM para traffic shifting en Lambda | D - CodeDeploy | ✅ +25 XP |
| 3 | Orden correcto del pipeline CICD con SAM | C - CodeCommit → CodeBuild → CF/SAM → CodeDeploy | ✅ +25 XP |
| 4 | Cómo deploya SAM Lambda vs DynamoDB | B - Lambda via CodeDeploy, DynamoDB via CF | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] SAM = CloudFormation para serverless
- [x] SAM usa CodeDeploy internamente para Lambda traffic shifting
- [x] Pipeline: CodeCommit → CodeBuild → CF/SAM → CodeDeploy
- [x] Solo Lambda usa CodeDeploy, el resto va por CF normal

---

### 12.6 AWS CDK (Cloud Development Kit)
**Estado:** ✅ Completado
**Fecha:** 2026-03-06

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Devs Python sin YAML, definir infra | D - AWS CDK | ✅ +25 XP |
| 2 | Qué genera cdk synth | C - CloudFormation template | ✅ +25 XP |
| 3 | Lambda + traffic shifting + YAML | C - SAM | ✅ +25 XP |
| 4 | Qué tienen en común CDK y SAM | C - Ambos generan CF templates | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] CDK = infra con lenguajes de programación (TS, Python, Java, .NET)
- [x] CDK compila a CloudFormation templates
- [x] CDK vs SAM vs CloudFormation: cuándo usar cada uno
- [x] CDK y SAM ambos generan CF por debajo

---

### 12.7 AWS Systems Manager (SSM)
**Estado:** ✅ Completado
**Fecha:** 2026-03-07

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Script en 100 EC2 sin SSH | C - SSM Run Command | ✅ +25 XP |
| 2 | Instancia no aparece en SSM | B - Agent o IAM Role | ✅ +25 XP |
| 3 | Log de comandos de devs en prod | C - Session Manager + CW Logs/S3 | ✅ +25 XP |
| 4 | Extraer logs antes de ASG terminate | B - Lifecycle Hook → EventBridge → Run Command | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] Run Command = ejecutar sin SSH ni puerto 22
- [x] Session Manager = shell con auditoría completa (CW Logs + CloudTrail)
- [x] Patch Manager = baseline + groups + maintenance window
- [x] OpsCenter = agregación de info operativa + runbooks
- [x] Instancia no aparece = agent o IAM Role

---

### 12.8 AWS Cloud Map
**Estado:** ✅ Completado
**Fecha:** 2026-03-07

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Backend endpoint cambia, sin cambiar frontend | C - Cloud Map | ✅ +25 XP |
| 2 | Cómo consultar Cloud Map | B - SDK, API o DNS (Route 53) | ✅ +25 XP |
| 3 | Servicio caído registrado en Cloud Map | C - Health checks no devuelven endpoint | ✅ +25 XP |
| 4 | Diferencia Load Balancer vs Cloud Map | B - LB distribuye tráfico, Cloud Map es service discovery | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] Cloud Map = service discovery gestionado
- [x] Consulta via SDK, API o DNS (Route 53)
- [x] Health checks integrados
- [x] Cloud Map ≠ Load Balancer (discovery vs distribución)

---

## Sección 13: Cost Control

### 13.1 Cost Allocation Tags
**Estado:** ✅ Completado
**Fecha:** 2026-03-07

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Cliente no sabe quién gasta qué | B - Cost Allocation Tags + estrategia | ✅ +25 XP |
| 2 | AWS Generated Tags en recursos existentes | D (incorrecto) → B - No aplica, solo nuevos | ❌ |
| 3 | Cuándo aparecen en reportes | C - ~24 horas | ✅ +25 XP |
| 4 | Dónde se ven las Cost Allocation Tags | C - Solo en consola de Billing | ✅ +25 XP |

**Puntuación:** 3/4 (75%) ✅ APROBADO
**XP ganado:** 75

#### Conceptos dominados:
- [x] Cost Allocation Tags = columnas en billing reports
- [x] Solo visibles en consola de Billing
- [x] ~24 horas de delay
- [ ] AWS Generated Tags NO son retroactivas ← REPASAR

---

### 13.2 AWS Tag Editor
**Estado:** ✅ Completado
**Fecha:** 2026-03-07

#### Quiz (2 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | 80 recursos sin tag en 3 regiones | B - Tag Editor buscar + bulk | ✅ +25 XP |
| 2 | Diferencia Tag Editor vs Cost Allocation Tags | B - Editar tags vs verlas en billing | ✅ +25 XP |

**Puntuación:** 2/2 (100%) ⭐ PERFECTO
**XP ganado:** 50

#### Conceptos dominados:
- [x] Tag Editor = buscar/editar tags en bulk cross-region
- [x] Tag Editor ≠ Cost Allocation Tags

---

### 13.3 AWS Trusted Advisor
**Estado:** ✅ Completado
**Fecha:** 2026-03-10

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Developer plan sin full checks | B - Solo 7 checks, necesita Business+ | ✅ +25 XP |
| 2 | Bucket seguro pero objetos públicos | C - TA solo verifica bucket, no objetos | ✅ +25 XP |
| 3 | Aumentar límite de vCPUs | C - Support Center o Service Quotas API | ✅ +25 XP |
| 4 | Monitorear limits 6 cuentas + Slack | C - Lambda → TA → EventBridge cross-account → Slack | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] Full Trusted Advisor = Business o Enterprise plan
- [x] TA detecta bucket público, NO objetos públicos
- [x] TA monitorea limits pero NO los aumenta
- [x] Arquitectura multi-account con EventBridge cross-account

---

### 13.4 AWS Service Quotas
**Estado:** ✅ Completado
**Fecha:** 2026-03-10

#### Quiz (3 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Alerta al 80% límite vCPUs | C - Service Quotas + CloudWatch Alarm | ✅ +25 XP |
| 2 | Diferencia Trusted Advisor vs Service Quotas | B - SQ monitorea y aumenta, TA solo monitorea | ✅ +25 XP |
| 3 | Lambda throttleando, resolver programáticamente | C - Service Quotas API | ✅ +25 XP |

**Puntuación:** 3/3 (100%) ⭐ PERFECTO
**XP ganado:** 75

#### Conceptos dominados:
- [x] Service Quotas = monitorear + aumentar límites
- [x] Crea CloudWatch Alarms desde la consola
- [x] Service Quotas API para aumento programático
- [x] No requiere Business plan (a diferencia de Trusted Advisor)

---

### 13.5 EC2 Launch Types & Savings Plan
**Estado:** ✅ Completado
**Fecha:** 2026-03-10

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Batch interrumpible, máximo ahorro | C - Spot Instances | ✅ +25 XP |
| 2 | Oracle licencia por core, controlar servidor | C - Dedicated Host | ✅ +25 XP |
| 3 | Migrando EC2 a Fargate/Lambda, ahorro flexible | C - Compute Savings Plan | ✅ +25 XP |
| 4 | Savings Plan $10/h pero consume $15/h | B - $10 descuento + $5 On-Demand | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] Spot = fault-tolerant + máximo ahorro
- [x] Dedicated Host = licencias core/socket + placement control
- [x] EC2 Instance SP (72%) vs Compute SP (66%) vs SageMaker SP (64%)
- [x] Uso sobre el compromiso = On-Demand

---

### 13.6 S3 Cost Savings
**Estado:** ✅ Completado
**Fecha:** 2026-03-10

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Objetos activos 30d luego casi nunca | B - Lifecycle Rules Standard → IA | ✅ +25 XP |
| 2 | Thumbnails recreables, máximo ahorro | C - One Zone-IA | ✅ +25 XP |
| 3 | Requester Pays pero sigue pagando | B - Cross-account role en tu cuenta | ✅ +25 XP |
| 4 | Qué paga siempre el dueño del bucket | B - El almacenamiento (storage) | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] Lifecycle Rules para automatizar transiciones
- [x] One Zone-IA para datos recreables
- [x] Requester Pays: storage = dueño, transferencia = solicitante
- [x] Cross-account role en tu cuenta = vos pagás (trampa)

---

### 13.7 S3 Storage Classes - Analysis
**Estado:** ⚠️ Repasar
**Fecha:** 2026-03-10

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Docs regulatorios 7 años, esperar 48hrs | B - Glacier Deep Archive | ✅ +25 XP |
| 2 | Patrones impredecibles, sin gestión manual | C - Intelligent Tiering | ✅ +25 XP |
| 3 | Qué es igual en todas las clases | A (incorrecto) → B - Durabilidad 11 nueves | ❌ |
| 4 | Glacier Flexible más rápido posible | A (incorrecto) → C - Expedited 1-5 min | ❌ |

**Puntuación:** 2/4 (50%) ❌ NO APROBADO
**XP ganado:** 50

#### Conceptos a REPASAR:
- [ ] Durabilidad (11 nueves) = igual en TODAS, disponibilidad VARÍA
- [ ] Glacier Flexible: Expedited (1-5 min) > Standard (3-5 hrs) > Bulk (5-12 hrs gratis)

---

### 13.8 AWS Budgets & Cost Explorer
**Estado:** ✅ Completado
**Fecha:** 2026-03-10

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Bloquear recursos al superar $2K | B - Budgets + Budget Action con SCP | ✅ +25 XP |
| 2 | Deploy budget en 15 cuentas | B - CloudFormation StackSet | ✅ +25 XP |
| 3 | Entender qué servicio/equipo gastó más | C - Cost Explorer drill down | ✅ +25 XP |
| 4 | Qué hace Cost Explorer que Budgets no | B - Forecast 12 meses + recomendar Savings Plan | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] Budget Actions: IAM Policy, SCP, Stop instances
- [x] Centralizado vs Descentralizado (StackSet)
- [x] Cost Explorer = análisis + forecast + recomendar Savings Plan
- [x] Budgets = alertas + acciones, Cost Explorer = visualización + predicción

---

### 13.9 AWS Compute Optimizer
**Estado:** ✅ Completado
**Fecha:** 2026-03-10

#### Quiz (3 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | 150 EC2 sobre-aprovisionadas | C - Compute Optimizer | ✅ +25 XP |
| 2 | No incluye RAM en análisis | B - Instalar CloudWatch Agent | ✅ +25 XP |
| 3 | Recursos soportados | B (incorrecto) → A - EC2, ASG, EBS, Lambda | ❌ |

**Puntuación:** 2/3 (67%) ✅ APROBADO
**XP ganado:** 50

#### Conceptos dominados:
- [x] Compute Optimizer = ML + CloudWatch para right-sizing
- [x] RAM necesita CloudWatch Agent
- [ ] Solo soporta EC2, ASG, EBS, Lambda (no RDS ni S3) ← REPASAR

---

### 13.10 EC2 Reserved Instances
**Estado:** ✅ Completado
**Fecha:** 2026-03-11

#### Quiz (3 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Desactivar RI sharing para una cuenta | B - Management Account, Billing Console | ✅ +25 XP |
| 2 | Renovar RI sin perder descuento | B - Queue compra en fecha expiración | ✅ +25 XP |
| 3 | Qué más se comparte además de RIs | A (incorrecto) → B - Savings Plans | ❌ |

**Puntuación:** 2/3 (67%) ✅ APROBADO
**XP ganado:** 50

#### Conceptos dominados:
- [x] RI sharing se controla desde Management Account, Billing Console
- [x] Renovar RI = queue compra en fecha de expiración
- [ ] RIs Y Savings Plans se comparten, Spot NO ← REPASAR

---

## Sección 14: Migration

### 14.1 Cloud Migration Strategies (7R)
**Estado:** ✅ Completado
**Fecha:** 2026-03-15

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | DB a AWS sin cambiar código + backups/HA | C - Replatform a RDS | ✅ +25 XP |
| 2 | 50 servers, datacenter vence en 6 semanas | A - Rehost con MGN | ✅ +25 XP |
| 3 | VMware on-prem, mantener herramientas | D - Relocate a VMware Cloud on AWS | ✅ +25 XP |
| 4 | CRM custom de 12 años, sin mantenedores | B - Repurchase a Salesforce | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] 7 estrategias de migración (Retire, Retain, Relocate, Rehost, Replatform, Repurchase, Refactor)
- [x] Rehost = lift & shift, sin cambios, rápido
- [x] Replatform = misma app + servicios managed (RDS, Beanstalk)
- [x] Repurchase = drop & shop, cambiar a SaaS
- [x] Refactor = reescribir cloud native (serverless, microservicios)

---

### 14.2 AWS Storage Gateway
**Estado:** ⚠️ Repasar
**Fecha:** 2026-03-15

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | File server Windows + SMB + Glacier | A (incorrecto) → B - S3 File Gateway + SMB + Lifecycle | ❌ |
| 2 | Volúmenes médicos, todo local + DR a EBS | A (incorrecto) → D - Volume Gateway Stored | ❌ |
| 3 | Veritas NetBackup + cintas + 15 años | A - Tape Gateway + Glacier Deep Archive | ✅ +25 XP |
| 4 | File Gateway + mover a Glacier | C - Lifecycle Policy en S3 | ✅ +25 XP |

**Puntuación:** 2/4 (50%) ❌ NO APROBADO
**XP ganado:** 50

#### Conceptos a REPASAR:
- [ ] File share (NFS/SMB) = S3 File Gateway, NO Volume Gateway
- [ ] Volume Gateway = iSCSI block storage (volúmenes/discos)
- [ ] Stored = todo on-prem + backup, Cached = cloud + caché local
- [x] Tape Gateway para cintas/VTL
- [x] S3 File Gateway NO soporta Glacier directo → Lifecycle Policy

---

### 14.12 AWS Backup
**Estado:** ✅ Completado
**Fecha:** 2026-03-15

#### Quiz (2 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Backup centralizado EC2+RDS+DynamoDB cross-region | B - AWS Backup | ✅ +25 XP |
| 2 | Backups que ni root puede borrar | C - Vault Lock (WORM) | ✅ +25 XP |

**Puntuación:** 2/2 (100%) ⭐ PERFECTO
**XP ganado:** 50

#### Conceptos dominados:
- [x] AWS Backup = backup centralizado multi-servicio
- [x] Vault Lock (WORM) = ni root borra
- [x] Cross-region + cross-account

---

### 14.11 AWS Migration Evaluator
**Estado:** ✅ Completado
**Fecha:** 2026-03-15

#### Quiz (1 pregunta)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Comparar costo on-prem vs AWS para el board | B - Migration Evaluator | ✅ +25 XP |

**Puntuación:** 1/1 (100%) ⭐ PERFECTO
**XP ganado:** 25

#### Conceptos dominados:
- [x] Migration Evaluator = business case ($$$ justification)

---

### 14.10 VM Migration Services
**Estado:** ✅ Completado
**Fecha:** 2026-03-15

#### Quiz (2 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Mapear comunicación entre 200 servidores | B - Application Discovery Agent-based | ✅ +25 XP |
| 2 | CloudEndure Migration = qué servicio actual | D - MGN | ✅ +25 XP |

**Puntuación:** 2/2 (100%) ⭐ PERFECTO
**XP ganado:** 50

#### Conceptos dominados:
- [x] Discovery Agentless (VMware) vs Agent-based (mapeo de red)
- [x] MGN = lift & shift (reemplaza CloudEndure Migration + SMS)
- [x] DRS = DR (reemplaza CloudEndure DR)

---

### 14.9 AWS FIS (Fault Injection Simulator)
**Estado:** ✅ Completado
**Fecha:** 2026-03-15

#### Quiz (1 pregunta)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Terminar 3/6 EC2 de forma controlada | C - AWS FIS | ✅ +25 XP |

**Puntuación:** 1/1 (100%) ⭐ PERFECTO
**XP ganado:** 25

#### Conceptos dominados:
- [x] FIS = Chaos Engineering nativo de AWS
- [x] Soporta EC2, ECS, EKS, RDS

---

### 14.8 Disaster Recovery
**Estado:** ✅ Completado
**Fecha:** 2026-03-15

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | 24h downtime, 1 día data loss, barato | B - Backup & Restore | ✅ +25 XP |
| 2 | Banco, 5 min downtime, cero data loss | D - Multi Site + Aurora Global | ✅ +25 XP |
| 3 | RPO 10 min, RTO 1h, no pagar EC2 idle | D (incorrecto) → A - Pilot Light | ❌ |
| 4 | Direct Connect se cae, backup de red | C - Site-to-Site VPN | ✅ +25 XP |

**Puntuación:** 3/4 (75%) ✅ APROBADO
**XP ganado:** 75

#### Conceptos dominados:
- [x] B&R para bajo presupuesto, RPO/RTO alto
- [x] Multi Site para cero downtime + cero data loss
- [x] Site-to-Site VPN como backup de Direct Connect
- [ ] Pilot Light = solo DB, NO paga EC2 idle. Warm Standby = todo al mínimo, SÍ paga EC2 ← REPASAR

---

### 14.7 AWS CART (Cloud Adoption Readiness Tool)
**Estado:** ✅ Completado
**Fecha:** 2026-03-15

#### Quiz (1 pregunta)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Evaluar readiness migración, 6 perspectivas | C - AWS CART | ✅ +25 XP |

**Puntuación:** 1/1 (100%) ⭐ PERFECTO
**XP ganado:** 25

#### Conceptos dominados:
- [x] CART = cuestionario readiness con 6 perspectivas
- [x] Output = scorecard + recomendaciones

---

### 14.6 AWS DMS (Database Migration Service)
**Estado:** ✅ Completado
**Fecha:** 2026-03-15

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Oracle → Aurora PG sin downtime | D - DMS Full Load + CDC + SCT | ✅ +25 XP |
| 2 | Replicar OpenSearch → OpenSearch con DMS | A - No, OpenSearch solo target | ✅ +25 XP |
| 3 | MySQL → RDS MySQL, ¿necesita SCT? | C - No, mismo motor | ✅ +25 XP |
| 4 | Oracle 60TB → Aurora, red 500 Mbps | B - SCT → Snowball → S3 → DMS + CDC | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] DMS + CDC para migración sin downtime
- [x] SCT solo cuando cambia el motor de DB
- [x] OpenSearch solo como target, nunca source
- [x] DMS + Snowball para migraciones masivas (TB)

---

### 14.5 Snow Family - Solution Architecture (Performance)
**Estado:** ✅ Completado
**Fecha:** 2026-03-15

#### Quiz (2 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Transferencia a 30 MB/s, necesita más rápido | C - S3 Adapter for Snowball | ✅ +25 XP |
| 2 | 2M fotos de 800KB, transferencia lenta | B - ZIPs ≥ 1MB + múltiples terminales | ✅ +25 XP |

**Puntuación:** 2/2 (100%) ⭐ PERFECTO
**XP ganado:** 50

#### Conceptos dominados:
- [x] S3 Adapter for Snowball = 250-400 MB/s (10x más rápido)
- [x] Archivos pequeños → agrupar en ZIPs + cargar en paralelo

---

### 14.4 Snow Family (Snowball)
**Estado:** ✅ Completado
**Fecha:** 2026-03-15

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | 300TB, conexión 1 Gbps compartida | C - Snowball Storage Optimized x2 | ✅ +25 XP |
| 2 | IoT sin internet, ML tiempo real | A - Snowball Edge Compute Optimized | ✅ +25 XP |
| 3 | 50TB, conexión 10 Gbps dedicada | D - Upload directo a S3 | ✅ +25 XP |
| 4 | Buque 3 meses, preprocesar + transcodificar | A (incorrecto) → B - Compute Optimized | ❌ |

**Puntuación:** 3/4 (75%) ✅ APROBADO
**XP ganado:** 75

#### Conceptos dominados:
- [x] Regla: >1 semana por red → Snowball
- [x] Storage Optimized (210TB) para migración masiva
- [x] Upload directo si la red es suficiente
- [ ] Compute Optimized cuando hay procesamiento (EC2/Lambda/ML/transcodificación) ← REPASAR

---

### 14.3 Storage Gateway - Solution Architecture
**Estado:** ✅ Completado
**Fecha:** 2026-03-15

#### Quiz (4 preguntas)
| # | Pregunta | Respuesta | Resultado |
|---|----------|-----------|-----------|
| 1 | Archivo restaurado en S3 no aparece en gateway | D - RefreshCache API | ✅ +25 XP |
| 2 | Dos oficinas, Dallas R/W + Atlanta read-only | B - File Gateway R/W + Read-Only, mismo bucket | ✅ +25 XP |
| 3 | FDA, archivos inmutables, WORM | A - S3 File Gateway + Object Lock | ✅ +25 XP |
| 4 | Facturas PDF, indexar + queries sin afectar gateway | D - S3 Event → Lambda + Athena | ✅ +25 XP |

**Puntuación:** 4/4 (100%) ⭐ PERFECTO
**XP ganado:** 100

#### Conceptos dominados:
- [x] RefreshCache API para sincronizar gateway después de cambios en S3
- [x] Read-only replicas entre datacenters via mismo bucket
- [x] S3 Object Lock (WORM) para compliance inmutable
- [x] S3 Events + Lambda + Athena no afectan al gateway

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
| 2026-02-08 | 4 | 4.3 CloudTrail - SA Pro | 100 | ⭐ Perfecto (100%) |
| 2026-02-08 | 4 | 4.4 KMS | 75 | ✅ Aprobado (75%) |
| 2026-02-08 | 4 | 4.5 Parameter Store | 75 | ✅ Aprobado (75%) |
| 2026-02-08 | 4 | 4.6 Secrets Manager | 100 | ⭐ Perfecto (100%) |
| 2026-02-08 | 4 | 4.7 RDS Security | 50 | ✅ Aprobado (67%) |
| 2026-02-08 | 4 | 4.8 SSL, SNI & MITM | 75 | ⭐ Perfecto (100%) |
| 2026-02-08 | 4 | 4.9 ACM | 50 | ✅ Aprobado (67%) |
| 2026-02-08 | 4 | 4.10 CloudHSM | 50 | ✅ Aprobado (67%) |
| 2026-02-08 | 4 | 4.11 SSL on ALB | 50 | ✅ Aprobado (67%) |
| 2026-02-08 | 4 | 4.12 S3 Security | 25 | ❌ Repasar (25%) |
| 2026-02-08 | 4 | 4.13 S3 Access Points | 50 | ⭐ Perfecto (100%) |
| 2026-02-08 | 4 | 4.14 S3 Multi-Region Access Points | 100 | ⭐ Perfecto (100%) |
| 2026-02-08 | 4 | 4.15 S3 Object Lambda | 100 | ⭐ Perfecto (100%) |
| 2026-02-21 | 9 | 9.2 SQS | 100 | ⭐ Perfecto (100%) |
| 2026-02-21 | 9 | 9.3 Amazon MQ | 50 | ✅ Aprobado (67%) |
| 2026-02-21 | 9 | 9.4 SNS | 25 | ❌ Repasar (33%) |
| 2026-02-21 | 9 | 9.5 SNS+SQS Fan Out | 75 | ✅ Aprobado (75%) |
| 2026-02-21 | 9 | 9.6 SNS Delivery Retries & DLQ | 25 | ⚠️ Repasar (50%) |
| 2026-02-21 | 10 | 10.1 Kinesis Data Streams | 50 | ✅ Aprobado (67%) |
| 2026-02-23 | 10 | 10.2 Kinesis Data Firehose | 100 | ⭐ Perfecto (100%) |
| 2026-02-23 | 10 | 10.3 Managed Service Apache Flink | 50 | ⭐ Perfecto (100%) |
| 2026-02-23 | 10 | 10.4 Streaming Architectures | 75 | ✅ Aprobado (75%) |
| 2026-02-23 | 10 | 10.5 Amazon MSK | 50 | ⭐ Perfecto (100%) |
| 2026-02-24 | 10 | 10.6 AWS Batch | 75 | ⭐ Perfecto (100%) |
| 2026-02-27 | 10 | 10.7 Amazon EMR | 25 | ❌ Repasar (33%) |
| 2026-02-27 | 10 | 10.8 Running Jobs Comparison | 50 | ⭐ Perfecto (100%) |
| 2026-02-27 | 10 | 10.9 AWS Glue | 50 | ⭐ Perfecto (100%) |
| 2026-02-27 | 10 | 10.10 Amazon Redshift | 75 | ✅ Aprobado (75%) |
| 2026-02-28 | 10 | 10.11 DocumentDB | 50 | ⭐ Perfecto (100%) |
| 2026-02-28 | 10 | 10.12 Amazon Timestream | 50 | ⭐ Perfecto (100%) |
| 2026-02-28 | 10 | 10.13 Amazon Athena | 75 | ⭐ Perfecto (100%) |
| 2026-02-28 | 10 | 10.14 Amazon QuickSight | 100 | ⭐ Perfecto (100%) |
| 2026-03-02 | 11 | 11.1 CloudWatch | 100 | ⭐ Perfecto (100%) |
| 2026-03-02 | 11 | 11.2 CloudWatch Logs | 100 | ⭐ Perfecto (100%) |
| 2026-03-02 | 11 | 11.3 Amazon EventBridge | 100 | ⭐ Perfecto (100%) |
| 2026-03-02 | 11 | 11.4 AWS X-Ray | 50 | ⭐ Perfecto (100%) |
| 2026-03-02 | 11 | 11.5 AWS Health Dashboard | 50 | ⭐ Perfecto (100%) |
| 2026-03-05 | 12 | 12.1 Elastic Beanstalk | 100 | ⭐ Perfecto (100%) |
| 2026-03-06 | 12 | 12.2 CodeDeploy | 0 | ❌ Repasar (0%) |
| 2026-03-06 | 12 | 12.3 CloudFormation | 25 | ⭐ Perfecto (100%) |
| 2026-03-06 | 12 | 12.4 Service Catalog | 25 | ⭐ Perfecto (100%) |
| 2026-03-06 | 12 | 12.5 SAM | 100 | ⭐ Perfecto (100%) |
| 2026-03-06 | 12 | 12.6 CDK | 100 | ⭐ Perfecto (100%) |
| 2026-03-07 | 12 | 12.7 Systems Manager | 100 | ⭐ Perfecto (100%) |
| 2026-03-07 | 12 | 12.8 Cloud Map | 100 | ⭐ Perfecto (100%) |
| 2026-03-07 | 13 | 13.1 Cost Allocation Tags | 75 | ✅ Aprobado (75%) |
| 2026-03-07 | 13 | 13.2 Tag Editor | 50 | ⭐ Perfecto (100%) |
| 2026-03-10 | 13 | 13.3 Trusted Advisor | 100 | ⭐ Perfecto (100%) |
| 2026-03-10 | 13 | 13.4 Service Quotas | 75 | ⭐ Perfecto (100%) |
| 2026-03-10 | 13 | 13.5 EC2 Launch Types & Savings Plan | 100 | ⭐ Perfecto (100%) |
| 2026-03-10 | 13 | 13.6 S3 Cost Savings | 100 | ⭐ Perfecto (100%) |
| 2026-03-10 | 13 | 13.7 S3 Storage Classes | 50 | ❌ Repasar (50%) |
| 2026-03-10 | 13 | 13.8 Budgets & Cost Explorer | 100 | ⭐ Perfecto (100%) |
| 2026-03-10 | 13 | 13.9 Compute Optimizer | 50 | ✅ Aprobado (67%) |
| 2026-03-11 | 13 | 13.10 EC2 Reserved Instances | 50 | ✅ Aprobado (67%) |
| 2026-03-15 | 14 | 14.1 Cloud Migration Strategies (7R) | 100 | ⭐ Perfecto (100%) |
| 2026-03-15 | 14 | 14.2 Storage Gateway | 50 | ❌ Repasar (50%) |
| 2026-03-15 | 14 | 14.3 Storage Gateway - Solution Architecture | 100 | ⭐ Perfecto (100%) |
| 2026-03-15 | 14 | 14.4 Snow Family | 75 | ✅ Aprobado (75%) |
| 2026-03-15 | 14 | 14.5 Snow Family - Solution Architecture | 50 | ⭐ Perfecto (100%) |
| 2026-03-15 | 14 | 14.6 AWS DMS | 100 | ⭐ Perfecto (100%) |
| 2026-03-15 | 14 | 14.7 AWS CART | 25 | ⭐ Perfecto (100%) |
| 2026-03-15 | 14 | 14.8 Disaster Recovery | 75 | ✅ Aprobado (75%) |
| 2026-03-15 | 14 | 14.9 AWS FIS | 25 | ⭐ Perfecto (100%) |
| 2026-03-15 | 14 | 14.10 VM Migration Services | 50 | ⭐ Perfecto (100%) |
| 2026-03-15 | 14 | 14.11 Migration Evaluator | 25 | ⭐ Perfecto (100%) |
| 2026-03-15 | 14 | 14.12 AWS Backup | 50 | ⭐ Perfecto (100%) |

