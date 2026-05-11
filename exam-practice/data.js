window.examData = {
  "metadata": {
    "student": "Luis Barral",
    "exam": "AWS Solutions Architect Professional (SAP-C02)",
    "totalExams": 10,
    "passMark": 75,
    "started": "2026-05-06",
    "lastUpdated": "2026-05-10"
  },
  "exams": [
    {
      "n": 1,
      "name": "Practice Exam 1",
      "date": "2026-05-06",
      "scoreCorrect": 15,
      "scoreTotal": 30,
      "passed": false,
      "durationMinutes": 70,
      "domains": [
        {
          "name": "Design Solutions for Organizational Complexity",
          "questions": 6,
          "correctPct": 67
        },
        {
          "name": "Continuous Improvement for Existing Solutions",
          "questions": 11,
          "correctPct": 55
        },
        {
          "name": "Design for New Solutions",
          "questions": 9,
          "correctPct": 44
        },
        {
          "name": "Accelerate Workload Migration and Modernization",
          "questions": 4,
          "correctPct": 25
        }
      ]
    },
    {
      "n": 2,
      "name": "Practice Exam 2",
      "date": null,
      "scoreCorrect": null,
      "scoreTotal": null,
      "passed": null
    },
    {
      "n": 3,
      "name": "Practice Exam 3",
      "date": null,
      "scoreCorrect": null,
      "scoreTotal": null,
      "passed": null
    },
    {
      "n": 4,
      "name": "Practice Exam 4",
      "date": null,
      "scoreCorrect": null,
      "scoreTotal": null,
      "passed": null
    },
    {
      "n": 5,
      "name": "Practice Exam 5",
      "date": null,
      "scoreCorrect": null,
      "scoreTotal": null,
      "passed": null
    },
    {
      "n": 6,
      "name": "Practice Exam 6",
      "date": null,
      "scoreCorrect": null,
      "scoreTotal": null,
      "passed": null
    },
    {
      "n": 7,
      "name": "Practice Exam 7",
      "date": null,
      "scoreCorrect": null,
      "scoreTotal": null,
      "passed": null
    },
    {
      "n": 8,
      "name": "Practice Exam 8",
      "date": null,
      "scoreCorrect": null,
      "scoreTotal": null,
      "passed": null
    },
    {
      "n": 9,
      "name": "Practice Exam 9",
      "date": null,
      "scoreCorrect": null,
      "scoreTotal": null,
      "passed": null
    },
    {
      "n": 10,
      "name": "Practice Exam 10",
      "date": null,
      "scoreCorrect": null,
      "scoreTotal": null,
      "passed": null
    }
  ],
  "patterns": [
    {
      "id": "sg-direction-inbound-outbound",
      "topic": "Security Group rule direction (inbound vs outbound)",
      "area": "VPC / Security Groups",
      "description": "Hesitation when deciding which SG gets inbound vs outbound, and whether to reference the peer SG as source or destination.",
      "occurrences": 1,
      "firstSeen": "2026-05-06",
      "lastSeen": "2026-05-06",
      "notes": "Outbound = traffic LEAVING SG owner; Inbound = traffic ENTERING SG owner. Reference peer SG, not CIDR."
    },
    {
      "id": "sg-stateful-vs-nacl-stateless",
      "topic": "Stateful Security Groups vs stateless NACLs (ephemeral ports)",
      "area": "VPC / Security Groups",
      "description": "Distractors mentioning ephemeral port ranges in SG questions.",
      "occurrences": 1,
      "firstSeen": "2026-05-06",
      "lastSeen": "2026-05-06",
      "notes": "SG = stateful, return traffic auto-allowed. If 'ephemeral' aparece en pregunta de SG, es distractor."
    },
    {
      "id": "datasync-vs-storage-gateway",
      "topic": "DataSync vs Storage Gateway",
      "area": "Migration / Storage",
      "description": "Confundir cu\u00e1ndo usar DataSync (migraci\u00f3n) vs Storage Gateway (acceso h\u00edbrido continuo).",
      "occurrences": 1,
      "firstSeen": "2026-05-09",
      "lastSeen": "2026-05-09",
      "notes": "DataSync = migrar/transferir. Storage Gateway = on-prem sigue accediendo a S3 como NFS. Si la app se va completa a AWS = DataSync."
    },
    {
      "id": "lambda-trigger-vs-worker",
      "topic": "Lambda como trigger vs como worker",
      "area": "Compute / Serverless",
      "description": "Descartar arquitecturas con Lambda porque el job dura horas, sin notar que Lambda solo dispara y Batch hace el trabajo pesado.",
      "occurrences": 1,
      "firstSeen": "2026-05-09",
      "lastSeen": "2026-05-09",
      "notes": "S3 event \u2192 Lambda (trigger, segs) \u2192 Step Functions \u2192 Batch (horas). Lambda no procesa, solo dispara."
    },
    {
      "id": "s3-event-targets",
      "topic": "Targets v\u00e1lidos de S3 Event Notifications",
      "area": "Storage / Eventing",
      "description": "Opciones donde S3 dispara Step Functions o EC2 ASG directamente.",
      "occurrences": 1,
      "firstSeen": "2026-05-09",
      "lastSeen": "2026-05-09",
      "notes": "S3 events solo a Lambda, SNS, SQS, EventBridge. Punto. Cualquier otra cosa = trampa."
    },
    {
      "id": "cross-zone-load-balancing",
      "topic": "Cross-zone load balancing distribution math",
      "area": "Networking / ELB",
      "description": "C\u00e1lculo de distribuci\u00f3n de tr\u00e1fico con cross-zone enabled vs disabled.",
      "occurrences": 1,
      "firstSeen": "2026-05-09",
      "lastSeen": "2026-05-09",
      "notes": "Enabled = todas instancias parejas (100/N). Disabled = 50% por AZ, despu\u00e9s se reparte entre instancias de esa AZ."
    },
    {
      "id": "budgets-vs-cost-explorer",
      "topic": "AWS Budgets vs Cost Explorer",
      "area": "Billing",
      "description": "Confusi\u00f3n entre quien alerta y quien explora.",
      "occurrences": 1,
      "firstSeen": "2026-05-09",
      "lastSeen": "2026-05-09",
      "notes": "Budgets = alertas/threshold. Cost Explorer = mirar/analizar. Si hay 'alert when reaches X' \u2192 Budgets."
    },
    {
      "id": "ous-vs-scps",
      "topic": "OUs (contenedores) vs SCPs (pol\u00edticas)",
      "area": "AWS Organizations",
      "description": "Opciones que dicen 'organize accounts INTO SCPs' \u2014 sint\u00e1cticamente incorrecto.",
      "occurrences": 1,
      "firstSeen": "2026-05-09",
      "lastSeen": "2026-05-09",
      "notes": "OUs son carpetas que contienen cuentas. SCPs son reglas que se aplican a OUs. Cuentas viven en OUs, no en SCPs."
    },
    {
      "id": "fsx-failover-test",
      "topic": "FSx Multi-AZ failover testing",
      "area": "Storage / FSx",
      "description": "C\u00f3mo se testea un failover en FSx Multi-AZ.",
      "occurrences": 1,
      "firstSeen": "2026-05-09",
      "lastSeen": "2026-05-09",
      "notes": "Modificar throughput capacity dispara failover. Las ENIs nunca se tocan a mano (las maneja AWS)."
    },
    {
      "id": "cloudtrail-vs-cloudwatch",
      "topic": "CloudTrail vs CloudWatch para auditar",
      "area": "Monitoring / Auditing",
      "description": "Confundir auditor\u00eda de API vs auditor\u00eda de uso interno del recurso.",
      "occurrences": 2,
      "firstSeen": "2026-05-09",
      "lastSeen": "2026-05-09",
      "notes": "CloudTrail = qui\u00e9n toc\u00f3 la API de AWS. CloudWatch Logs = qu\u00e9 pasa adentro del recurso. End-user file access \u2260 CloudTrail. Aurora SQL queries \u2260 CloudTrail."
    },
    {
      "id": "monitoring-question-purpose",
      "topic": "Distinguir monitoring para autoscaling vs para debugging",
      "area": "Monitoring",
      "description": "Elegir 'detailed monitoring + CPUUtilization' cuando la pregunta ped\u00eda debugging post-mortem.",
      "occurrences": 1,
      "firstSeen": "2026-05-09",
      "lastSeen": "2026-05-09",
      "notes": "Antes de elegir, pregunt\u00e1: \u00bfesto resuelve el problema del enunciado o solo suena pro?"
    },
    {
      "id": "asg-suspend-process",
      "topic": "Qu\u00e9 proceso suspender en ASG",
      "area": "Compute / Auto Scaling",
      "description": "Suspender HealthCheck pensando que detiene terminaciones \u2014 los procesos son independientes.",
      "occurrences": 1,
      "firstSeen": "2026-05-09",
      "lastSeen": "2026-05-09",
      "notes": "HealthCheck marca, Terminate ejecuta. Frenar el detector no salva a los ya marcados. Lectura literal: 'se terminan' \u2192 suspend\u00e9 Terminate."
    },
    {
      "id": "session-manager-private-subnet",
      "topic": "Session Manager vs EC2 Instance Connect en subnet privada",
      "area": "Compute / SSM",
      "description": "Usar EC2 Instance Connect (necesita SSH/22) en lugar de Session Manager cuando ya hay SSM Agent.",
      "occurrences": 1,
      "firstSeen": "2026-05-09",
      "lastSeen": "2026-05-09",
      "notes": "Subnet privada + SSM Agent installed \u2192 Session Manager. Es un cartel luminoso del enunciado."
    },
    {
      "id": "direct-connect-vifs",
      "topic": "Direct Connect: Public VIF vs Private VIF",
      "area": "Networking / Direct Connect",
      "description": "Confundir cu\u00e1l VIF se usa para alcanzar un VPC interface endpoint (PrivateLink).",
      "occurrences": 1,
      "firstSeen": "2026-05-09",
      "lastSeen": "2026-05-09",
      "notes": "Public VIF \u2192 endpoints p\u00fablicos AWS (S3, DynamoDB) por DX. Private VIF \u2192 tu VPC (EC2, EFS, interface endpoints PrivateLink). Transit VIF \u2192 multi-VPC v\u00eda TGW. Si dice 'PrivateLink/private network' \u2192 Private VIF."
    },
    {
      "id": "scp-vs-iam-vs-config",
      "topic": "Bloquear acciones en m\u00faltiples cuentas: SCP vs IAM vs Config",
      "area": "AWS Organizations / Governance",
      "description": "Elegir la herramienta correcta para prevenir acciones IAM a escala (cientos de cuentas).",
      "occurrences": 1,
      "firstSeen": "2026-05-09",
      "lastSeen": "2026-05-09",
      "notes": "SCP = bloqueo central en Organizations (requiere All Features mode). IAM policy en cada cuenta = no escala. Config = solo NOTIFICA, no bloquea. Si dice 'deny/prevent' \u2192 SCP. Si dice 'detect/alert' \u2192 Config."
    },
    {
      "id": "organizations-feature-modes",
      "topic": "Organizations: All Features vs Consolidated Billing mode",
      "area": "AWS Organizations",
      "description": "Saber qu\u00e9 mode habilita SCPs y policies avanzadas.",
      "occurrences": 1,
      "firstSeen": "2026-05-09",
      "lastSeen": "2026-05-09",
      "notes": "All Features = SCPs + policies + integraciones avanzadas (default). Consolidated Billing = solo facturaci\u00f3n unificada, sin SCPs. Si la pregunta menciona SCPs/policies \u2192 All Features."
    },
    {
      "id": "s3-object-ownership-enforced",
      "topic": "S3 Object Ownership: Enforced vs Preferred + persistencia de propiedad",
      "area": "Storage / S3",
      "description": "Confundir comportamiento al alternar entre Bucket Owner Enforced y ACLs habilitados, y cu\u00e1l setting recomienda AWS para simplificar.",
      "occurrences": 1,
      "firstSeen": "2026-05-09",
      "lastSeen": "2026-05-09",
      "notes": "(1) Lo escrito bajo Enforced queda con bucket owner PARA SIEMPRE (no se revierte al reactivar ACLs). (2) ACLs viejos se RESTAURAN al reactivar ACLs (est\u00e1n guardados en metadata). (3) Para simplificar auditor\u00eda/permisos AWS recomienda Bucket Owner ENFORCED (no Preferred)."
    },
    {
      "id": "read-full-option-not-service-name",
      "topic": "Leer opci\u00f3n completa, no solo el nombre del servicio",
      "area": "Exam strategy",
      "description": "Descartar/elegir opciones por el nombre del servicio sin leer la implementaci\u00f3n que proponen.",
      "occurrences": 1,
      "firstSeen": "2026-05-10",
      "lastSeen": "2026-05-10",
      "notes": "Trampa t\u00edpica SAP-C02: ponen el servicio correcto pero con detalles absurdos (Parameter Store guardando OUs, IAM users con access keys, Lambda assume role para algo que ya hace nativo). Leer la opci\u00f3n ENTERA. Si la implementaci\u00f3n no encaja con c\u00f3mo funciona el servicio \u2192 descartar aunque el nombre suene bien."
    },
    {
      "id": "firewall-manager-multiaccount-waf",
      "topic": "AWS Firewall Manager para WAF multi-cuenta",
      "area": "Security / Multi-account",
      "description": "Firewall Manager es el servicio nativo para gestionar WAF/Shield/SG rules en cuentas de Organizations.",
      "occurrences": 1,
      "firstSeen": "2026-05-10",
      "lastSeen": "2026-05-10",
      "notes": "Firewall Manager lee Organizations directo (no necesita Parameter Store, ni Lambda, ni cross-account roles manuales). Si una opci\u00f3n menciona FM + esos extras \u2192 la opci\u00f3n est\u00e1 saboteada. Alternativa v\u00e1lida si FM no aparece bien planteado: Config org-wide rule + SSM Automation remediation + CloudFormation StackSets."
    },
    {
      "id": "elasticache-redis-vs-memcached",
      "topic": "ElastiCache: Redis vs Memcached para sesiones",
      "area": "Compute / Caching",
      "description": "Confundir cu\u00e1ndo usar Memcached (cache simple) vs Redis (con replicaci\u00f3n, persistencia).",
      "occurrences": 1,
      "firstSeen": "2026-05-10",
      "lastSeen": "2026-05-10",
      "notes": "Memcached = cache vol\u00e1til, sin replicaci\u00f3n, sin failover. Si muere = se pierden datos. Redis = replication group multi-AZ, persistencia, pub/sub. Para SESIONES o cualquier dato que no quer\u00e9s perder \u2192 Redis. 'Reliability' en la pregunta = Redis."
    },
    {
      "id": "aurora-vs-rds-multiaz",
      "topic": "Aurora MySQL vs RDS MySQL Multi-AZ",
      "area": "Database / RDS",
      "description": "Elegir RDS Multi-AZ cuando piden 'max reliability + performance' \u2014 Aurora supera en ambos.",
      "occurrences": 1,
      "firstSeen": "2026-05-10",
      "lastSeen": "2026-05-10",
      "notes": "RDS Multi-AZ = 1 standby pasivo, failover 60-120s. Aurora = storage compartido replicado 6x en 3 AZ, failover ~30s, hasta 5x m\u00e1s r\u00e1pido que MySQL plain. Si dicen 'maximum reliability AND better performance' con MySQL \u2192 Aurora MySQL."
    },
    {
      "id": "storage-gateway-refresh-vs-reset-cache",
      "topic": "Storage Gateway: RefreshCache vs ResetCache",
      "area": "Storage / Storage Gateway",
      "description": "Confundir RefreshCache (sincronizar cambios desde S3) con ResetCache (formatear disco de cache).",
      "occurrences": 1,
      "firstSeen": "2026-05-10",
      "lastSeen": "2026-05-10",
      "notes": "RefreshCache = traer cambios hechos directo en S3 al file share (re-escanea bucket). ResetCache = reconfigurar disco de cache cuando tiene errores (pierde el cache). Si subiste/borraste directo en S3 \u2192 RefreshCache."
    },
    {
      "id": "vpc-endpoint-target-service",
      "topic": "VPC Endpoint: \u00bfde qu\u00e9 servicio?",
      "area": "Networking / VPC Endpoints",
      "description": "Confundir cu\u00e1l servicio necesita el endpoint \u2014 el caller (Lambda/EC2) o el callee (Secrets Manager, Kinesis, etc.).",
      "occurrences": 1,
      "firstSeen": "2026-05-10",
      "lastSeen": "2026-05-10",
      "notes": "El endpoint se crea para el servicio AL QUE SE LLAMA, no para quien llama. Lambda en VPC que necesita Secrets Manager \u2192 Interface endpoint DE Secrets Manager. Lambda ya est\u00e1 en la VPC, no necesita endpoint 'de Lambda'."
    },
    {
      "id": "gateway-vs-interface-endpoint",
      "topic": "VPC Endpoints: Gateway vs Interface",
      "area": "Networking / VPC Endpoints",
      "description": "Confundir cu\u00e1ndo se puede usar Gateway endpoint (solo S3/DynamoDB) vs Interface endpoint (resto).",
      "occurrences": 1,
      "firstSeen": "2026-05-10",
      "lastSeen": "2026-05-10",
      "notes": "Gateway endpoint SOLO existe para S3 y DynamoDB (gratis, route table). Resto (Kinesis, SQS, SNS, SSM, etc.) = Interface endpoint (ENI privada, $$). Control: 'endpoint policy' (qu\u00e9 pasa por el endpoint) vs 'IAM permissions' (qui\u00e9n llama la API)."
    },
    {
      "id": "cost-allocation-shared-resource",
      "topic": "Cost allocation tags en recursos compartidos multi-tenant",
      "area": "Billing / Multi-tenancy",
      "description": "Querer usar cost allocation tags en un recurso compartido entre tenants.",
      "occurrences": 2,
      "firstSeen": "2026-05-09",
      "lastSeen": "2026-05-09",
      "notes": "Tags = nivel recurso. Si la tabla DynamoDB es compartida, tagearla agrupa a TODOS los tenants. Para multi-tenant compartido \u2192 instrumentar logs (provider_id + RCU/WCU) y prorratear vs Cost Explorer API total. PATR\u00d3N RECURRENTE: Luis cay\u00f3 2 veces."
    }
  ],
  "trickyQuestions": [
    {
      "examN": null,
      "date": "2026-05-06",
      "area": "VPC / Security Groups",
      "summary": "Two-tier EC2 + RDS MySQL: SG rules con least privilege.",
      "patternIds": [
        "sg-direction-inbound-outbound",
        "sg-stateful-vs-nacl-stateless"
      ],
      "myAnswer": "Inbound 3306 on DB SG (src=EC2 SG) + Outbound 3306 on EC2 SG (dst=DB SG)",
      "correctAnswer": "Inbound 3306 on DB SG (src=EC2 SG) + Outbound 3306 on EC2 SG (dst=DB SG)",
      "result": "correct",
      "keyInsight": "SG-to-SG, sin ephemeral. Estaba bien pero dud\u00f3."
    },
    {
      "examN": 1,
      "date": "2026-05-09",
      "area": "CloudFront / S3",
      "summary": "HTTP 307 Temporary Redirect en CloudFront con S3 origin reci\u00e9n creado.",
      "patternIds": [],
      "myAnswer": "Correcta",
      "correctAnswer": "(1) Bucket name tarda 24h en propagarse globalmente; (2) Cambiar origin domain al endpoint regional del bucket",
      "result": "correct",
      "keyInsight": "CloudFront default \u2192 s3.amazonaws.com (us-east-1). Si el bucket est\u00e1 en otra regi\u00f3n \u2192 307 hasta que propaga DNS. Workaround: usar endpoint regional expl\u00edcito."
    },
    {
      "examN": 1,
      "date": "2026-05-09",
      "area": "Migration / Compute",
      "summary": "Bioinformatics: NFS on-prem \u2192 AWS, jobs de horas, 20/d\u00eda, resultado en S3.",
      "patternIds": [
        "datasync-vs-storage-gateway",
        "lambda-trigger-vs-worker",
        "s3-event-targets"
      ],
      "myAnswer": "Storage Gateway file gateway",
      "correctAnswer": "DataSync \u2192 S3 \u2192 Lambda \u2192 Step Functions \u2192 Batch",
      "result": "incorrect",
      "keyInsight": "Migraci\u00f3n completa = DataSync, no Storage Gateway. Lambda solo dispara, Batch procesa las horas."
    },
    {
      "examN": 1,
      "date": "2026-05-09",
      "area": "Networking / ELB",
      "summary": "Cross-zone load balancing math: 1 instancia AZ-X + 4 instancias AZ-Y.",
      "patternIds": [
        "cross-zone-load-balancing"
      ],
      "myAnswer": "Correcta",
      "correctAnswer": "Enabled: 20% c/u (5 iguales). Disabled: AZ-X=50%, AZ-Y=12.5% c/u.",
      "result": "correct",
      "keyInsight": "Disabled = 50% por AZ y se reparte entre las que haya."
    },
    {
      "examN": 1,
      "date": "2026-05-09",
      "area": "Multi-account / Billing",
      "summary": "Retail multi-BU: tracking spend, quarantine de cuentas, alertas a security.",
      "patternIds": [
        "budgets-vs-cost-explorer",
        "ous-vs-scps"
      ],
      "myAnswer": "Eligi\u00f3 Cost Explorer alert (incorrecta) en lugar de Budgets",
      "correctAnswer": "(1) Budgets alert para mover a Exceptions OU + SCPs; (2) GuardDuty delegated admin + SNS; (3) OUs Security/Infra/Workloads/Suspended/Exceptions",
      "result": "partial",
      "keyInsight": "Budgets = alerta, Cost Explorer = visor. OUs son carpetas, SCPs son reglas \u2014 nunca 'organize accounts INTO SCPs'."
    },
    {
      "examN": 1,
      "date": "2026-05-09",
      "area": "Storage / FSx",
      "summary": "FSx Single-AZ \u2192 Multi-AZ + auditor\u00eda de file activity.",
      "patternIds": [
        "fsx-failover-test",
        "cloudtrail-vs-cloudwatch"
      ],
      "myAnswer": "Eligi\u00f3 la opci\u00f3n con 'modify ENIs' para testear failover",
      "correctAnswer": "Modify throughput capacity para failover + CloudWatch Logs + Kinesis Firehose para auditor\u00eda",
      "result": "partial",
      "keyInsight": "Las ENIs no se tocan a mano. Throughput capacity dispara failover. CloudTrail no audita file access (es API-level)."
    },
    {
      "examN": 1,
      "date": "2026-05-09",
      "area": "Monitoring / Debugging",
      "summary": "App Java en EC2 + Aurora, post-mortem de Thanksgiving sale, logs perdidos.",
      "patternIds": [
        "monitoring-question-purpose",
        "cloudtrail-vs-cloudwatch"
      ],
      "myAnswer": "Eligi\u00f3 'detailed monitoring + CPUUtilization' (incorrecta)",
      "correctAnswer": "(1) CloudWatch Logs agent en EC2; (2) Aurora slow query/error logs a CloudWatch; (3) X-Ray para HTTP + SQL tracing",
      "result": "partial",
      "keyInsight": "CPUUtilization es para autoscaling, no para debugging. Pregunta era 'logs perdidos' \u2192 CloudWatch Logs agent."
    },
    {
      "examN": 1,
      "date": "2026-05-09",
      "area": "Compute / Troubleshooting",
      "summary": "ASG marca instancias unhealthy y las termina antes de poder investigar.",
      "patternIds": [
        "asg-suspend-process",
        "session-manager-private-subnet"
      ],
      "myAnswer": "Suspend HealthCheck + EC2 Instance Connect",
      "correctAnswer": "Suspend Terminate + Session Manager",
      "result": "incorrect",
      "keyInsight": "Procesos del ASG son independientes: HealthCheck marca, Terminate mata. Frenar el detector no salva a las ya marcadas. Subnet privada + SSM Agent = Session Manager (cartel luminoso)."
    },
    {
      "examN": 1,
      "date": "2026-05-09",
      "area": "Networking / Direct Connect",
      "summary": "Migraci\u00f3n NFS on-prem \u2192 EFS sobre red privada, v\u00eda Direct Connect ya provisionado.",
      "patternIds": [
        "direct-connect-vifs",
        "datasync-vs-storage-gateway"
      ],
      "myAnswer": "DataSync sobre VPC endpoint EFS por PUBLIC VIF",
      "correctAnswer": "DataSync sobre PrivateLink interface endpoint EFS por PRIVATE VIF",
      "result": "incorrect",
      "keyInsight": "Public VIF = endpoints p\u00fablicos AWS. Private VIF = tu VPC (PrivateLink/interface endpoints). 'Private network' en el enunciado \u2192 Private VIF."
    },
    {
      "examN": 1,
      "date": "2026-05-09",
      "area": "AWS Organizations",
      "summary": "Multi-national, cientos de cuentas: centralizar compras de RIs bloqueando BUs independientes.",
      "patternIds": [
        "scp-vs-iam-vs-config",
        "organizations-feature-modes"
      ],
      "myAnswer": "SCP deny + Organizations All Features mode (correcta)",
      "correctAnswer": "SCP con deny en ec2:PurchaseReservedInstancesOffering/ModifyReservedInstances + Organizations en All Features mode",
      "result": "correct",
      "keyInsight": "Bloqueo central a escala = SCP (no IAM policy por cuenta, no Config). SCPs requieren All Features mode (Consolidated Billing no alcanza)."
    },
    {
      "examN": 1,
      "date": "2026-05-09",
      "area": "Storage / S3",
      "summary": "S3 bucket compartido entre 3 cuentas: alternar Object Ownership Enforced \u2194 ACLs habilitadas.",
      "patternIds": [
        "s3-object-ownership-enforced"
      ],
      "myAnswer": "(1) Permissions are restored \u2713; (2) Bucket owner ya NO ser\u00eda due\u00f1o (incorrecto)",
      "correctAnswer": "(1) Permissions ACL viejos se RESTAURAN al reactivar ACLs; (2) Bucket owner sigue siendo due\u00f1o de lo escrito bajo Enforced (no se revierte nunca)",
      "result": "partial",
      "keyInsight": "Bajo 'Bucket Owner Enforced' la propiedad es PERMANENTE \u2014 aunque reactives ACLs, esos objetos siguen siendo del bucket owner. Para simplificar AWS recomienda Enforced (no Preferred)."
    },
    {
      "examN": 1,
      "date": "2026-05-10",
      "area": "Security / Multi-account",
      "summary": "WAF rules across multiple accounts/OUs en Organizations, con remediaci\u00f3n autom\u00e1tica.",
      "patternIds": [
        "firewall-manager-multiaccount-waf",
        "read-full-option-not-service-name"
      ],
      "myAnswer": "Config org-wide rule + SSM Automation + CloudFormation StackSets (correcta pero por descarte)",
      "correctAnswer": "Config org-wide rule + SSM Automation + CloudFormation StackSets",
      "result": "correct",
      "keyInsight": "Instinto correcto: WAF multi-cuenta = Firewall Manager. PERO la opci\u00f3n de FM ten\u00eda basura (Parameter Store guarda OUs, Lambda assume role) \u2014 saboteada. Hay que leer la opci\u00f3n ENTERA, no solo el nombre del servicio. Alternativa v\u00e1lida cuando FM viene mal planteado: Config + SSM Automation + StackSets."
    },
    {
      "examN": 1,
      "date": "2026-05-10",
      "area": "Database / Compute / Caching",
      "summary": "Migraci\u00f3n stateful MySQL app: max reliability + better performance + SQL.",
      "patternIds": [
        "aurora-vs-rds-multiaz",
        "elasticache-redis-vs-memcached"
      ],
      "myAnswer": "Aurora MySQL + ALB + ElastiCache Redis (correcta, pero dud\u00f3 con RDS Multi-AZ + Memcached)",
      "correctAnswer": "Aurora MySQL + ALB + ElastiCache Redis replication group",
      "result": "correct",
      "keyInsight": "Dos trampas en la opci\u00f3n 1: Memcached pierde sesiones si muere (no replica), y RDS Multi-AZ tiene failover m\u00e1s lento que Aurora. 'Reliability' + 'sessions' = Redis. 'Max reliability + performance' + MySQL = Aurora."
    },
    {
      "examN": 1,
      "date": "2026-05-10",
      "area": "Storage / Storage Gateway",
      "summary": "Cambios directos en S3 (adds/deletes) no aparecen en el File Gateway share.",
      "patternIds": [
        "storage-gateway-refresh-vs-reset-cache"
      ],
      "myAnswer": "ResetCache",
      "correctAnswer": "RefreshCache",
      "result": "incorrect",
      "keyInsight": "Refresh = traer cambios de S3. Reset = formatear disco de cache. Si tocaste S3 fuera del gateway \u2192 RefreshCache."
    },
    {
      "examN": 1,
      "date": "2026-05-10",
      "area": "Networking / VPC Endpoints",
      "summary": "Secrets Manager rotation Lambda timeout \u2014 RDS privada, Lambda no llega a la API.",
      "patternIds": [
        "vpc-endpoint-target-service"
      ],
      "myAnswer": "Interface endpoint para Lambda",
      "correctAnswer": "Interface endpoint para Secrets Manager",
      "result": "incorrect",
      "keyInsight": "Endpoint = del servicio destino, no del caller. Lambda ya vive en la VPC; lo que no alcanza es la API p\u00fablica de Secrets Manager. Crear endpoint para Secrets Manager."
    },
    {
      "examN": 1,
      "date": "2026-05-10",
      "area": "Networking / VPC Endpoints",
      "summary": "Social media multi-AZ: NAT GW caro por tr\u00e1fico a Kinesis Data Streams desde subnets privadas.",
      "patternIds": [
        "gateway-vs-interface-endpoint"
      ],
      "myAnswer": "Interface endpoint + IAM permissions",
      "correctAnswer": "Gateway endpoint + endpoint policy \u2192 INCORRECTO en realidad: Kinesis NO soporta Gateway. La respuesta marcada como correcta en el quiz parece tener error; lo v\u00e1lido es Interface endpoint + endpoint policy.",
      "result": "incorrect",
      "keyInsight": "Gateway endpoint SOLO para S3 y DynamoDB. Kinesis = Interface obligatorio. Para reducir NAT GW $ con Kinesis: Interface endpoint. Control de acceso: 'endpoint policy' (no 'IAM permissions') controla el tr\u00e1fico que pasa por el endpoint."
    },
    {
      "examN": 1,
      "date": "2026-05-09",
      "area": "Billing / Multi-tenancy",
      "summary": "SaaS healthcare: chargeback per-tenant en DynamoDB compartida.",
      "patternIds": [
        "cost-allocation-shared-resource"
      ],
      "myAnswer": "Cost allocation tags con provider_id en la tabla",
      "correctAnswer": "Logs JSON estructurados con provider_id + RCU/WCU, agregar y prorratear contra Cost Explorer API total",
      "result": "incorrect",
      "keyInsight": "Tags = nivel recurso. Tabla compartida \u2192 no se puede tagear por fila. Multi-tenant compartido se prorratea por instrumentaci\u00f3n."
    }
  ]
};