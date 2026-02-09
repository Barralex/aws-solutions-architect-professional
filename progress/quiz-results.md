# Quiz Results - AWS SAP-C02

**Total XP:** 1900
**Lecciones completadas:** 26/205

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

