/* =====================================================================
   CRONOGRAMA DA aMOSTRA XIX  —  dados + renderização + pop-up
   ---------------------------------------------------------------------
   COMO ATUALIZAR (é só editar o array CRONOGRAMA abaixo):
   • Cada objeto de "dias" tem: rotulo (aba curta), data e uma lista "sessoes".
   • Cada sessão de PALESTRA abre um pop-up. Preencha:
       - titulo, resumo (frase curta do card), local, descricao (texto do pop-up)
       - palestrante: { nome, cargo, foto, bio, redes }
   • Fotos e redes podem ficar vazias ("") — o site coloca um avatar/oculta sozinho.
       foto ex.:  "styles/palestrantes/fulano.avif"
       redes:     instagram, linkedin, site, lattes, youtube, email  (só preencher os que tiver)
   • Sessões SEM palestrante (ex.: Coffee Break, Almoço, Abertura) viram
     linhas simples, sem pop-up. Basta usar tipo: "Intervalo".
   • Tipos aceitos (definem cor/ícone): Palestra, Minicurso, Mesa-redonda,
     Cerimônia, Intervalo, Credenciamento, Em breve, Pôsteres.  (qualquer outro cai no estilo padrão)
   ===================================================================== */

window.CRONOGRAMA = [
  {
    rotulo: "Seg",
    data: "28/09",
    diaSemana: "Segunda-feira",
    sessoes: [
      { horario: "7h30", tipo: "Credenciamento", titulo: "Credenciamento", palestrante: null },
      {
        horario: "8h30",
        tipo: "Palestra",
        titulo: "Do risco à decisão: o papel da Estatística na pesquisa aplicada em Finanças e Atuária",
        resumo: "Como problemas de Finanças e Atuária podem se transformar em perguntas estatísticas de pesquisa.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao:
          "Nesta palestra, serão apresentados exemplos de aplicações da Estatística em Finanças e Atuária, áreas em que decisões sobre investimentos, seguros e gestão de riscos dependem da adequada mensuração da incerteza. A partir de problemas reais, será discutido como probabilidade, distribuições, dependência, séries temporais e teoria dos valores extremos são utilizadas na pesquisa acadêmica para modelar e gerir riscos financeiros. O objetivo é mostrar como problemas de Finanças e Atuária podem se transformar em perguntas estatísticas de pesquisa e como os resultados desses modelos podem apoiar decisões em contextos de risco.",
        palestrante: {
          nome: "Thiago Dutra de Araújo",
          cargo: "Professor Doutor · FEA-USP (Depto. de Contabilidade e Atuária)",
          foto: "styles/palestrantes/Thiago_Dutra.avif",
          bio:
            "Doutor em Finanças, Risco e Atuária (FEA-USP), mestre em Educação Estatística (IME-USP) e graduado em Ciências Atuariais e em Matemática pela USP. É Professor Doutor do Departamento de Contabilidade e Atuária da FEA-USP e autor de livros e materiais didáticos. Dedica-se a pesquisas com Métodos Quantitativos aplicados à Gestão e Precificação de Riscos Financeiros e Seguros, com ênfase em Cópulas, Séries Temporais e Análise Multivariada.",
          redes: { instagram: "", linkedin: "https://www.linkedin.com/in/thiago-dutra-de-araujo/", site: "", lattes: "", youtube: "", email: "" }
        }
      },
      {
        horario: "9h30",
        tipo: "Palestra",
        titulo: "Gestão de Risco de Modelo (MRM)",
        resumo: "Como estruturar uma governança robusta de risco de modelo nas organizações.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao:
          "A apresentação aborda a importância da Gestão de Risco de Modelo diante do uso crescente de modelos nas decisões das organizações. Serão discutidos os principais riscos associados ao desenvolvimento, uso e monitoramento desses modelos, os elementos fundamentais de uma estrutura de MRM e os benefícios de uma governança robusta, trazendo uma visão prática sobre como as organizações podem aumentar a confiabilidade dos modelos e apoiar uma tomada de decisão mais segura e eficiente.",
        palestrante: {
          nome: "Edson Valero Dos Santos",
          cargo: "Management Solutions",
          foto: "logos/Ms.avif",
          parceiro: true,
          bio:
            "A Management Solutions é uma empresa internacional de consultoria especializada em assessoria empresarial, financeira, de riscos, organizacional, tecnológica e de processos. Conta com uma equipe multidisciplinar de mais de 4.000 profissionais, atuando através de 53 escritórios ao redor do mundo, em mais de 50 países.",
          redes: { instagram: "", linkedin: "", site: "www.managementsolutions.com", lattes: "", youtube: "", email: "" }
        }
      },
      { horario: "10h30", tipo: "Intervalo", titulo: "Coffee Break", palestrante: null },
      {
        horario: "11h00",
        tipo: "Palestra",
        titulo: "Modelagem Dinâmica Robusta de Mortalidade sob Choques Estruturais",
        resumo: "Uma extensão bayesiana do modelo de Liu–Li para representar choques de mortalidade ao longo do tempo.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao:
          "Choques de mortalidade associados a guerras, pandemias e outros eventos catastróficos desafiam os modelos de mortalidade padrão, pois produzem mudanças abruptas nos níveis de mortalidade e na variabilidade residual. As extensões de salto já existentes do modelo de Lee–Carter costumam distinguir a ocorrência do choque de sua severidade, mas assumem que a probabilidade de ocorrência e a variância observacional permanecem constantes ao longo do tempo. Este trabalho propõe uma extensão bayesiana dupla do modelo de salto de mortalidade de Liu–Li. Primeiro, a probabilidade fixa de ocorrência do choque é substituída por uma probabilidade latente variável no tempo, governada por uma evolução dinâmica de Dirichlet especializada para o caso Beta. Essa formulação acomoda heterogeneidade temporal e agrupamento na ocorrência de choques, mantendo o mecanismo original de probabilidade constante como um caso particular. Segundo, um processo dinâmico de precisão latente é introduzido por meio de uma formulação de mistura de escala, para capturar mudanças temporais na volatilidade residual. Ao modelar esses componentes separadamente, o modelo proposto distingue a propensão evolutiva a um choque, sua ocorrência e severidade reais, e períodos de variabilidade inexplicada incomumente alta. O modelo é aplicado a dados de mortalidade da Inglaterra e do País de Gales, do Human Mortality Database, cobrindo rupturas historicamente relevantes como as duas Guerras Mundiais e a pandemia de COVID-19. Seu desempenho é avaliado em comparação ao modelo padrão de Lee–Carter e à especificação original de Liu–Li, usando critérios de ajuste dentro da amostra e de previsão fora da amostra. O modelo proposto oferece uma representação mais completa dos choques de mortalidade, ao considerar conjuntamente a heterogeneidade tanto no mecanismo de ocorrência quanto na volatilidade residual.",
        palestrante: {
          nome: "Viviana das Graças Ribeiro Lobo",
          cargo: "Professora Adjunta · UFRJ (Depto. de Estatística/Instituto de Matemática)",
          foto: "styles/palestrantes/Viviana_Lobo.avif",
          bio:
            "Professora Adjunta do Departamento de Estatística/Instituto de Matemática da UFRJ, onde também é doutora em Estatística. É membro do Laboratório de Matemática Aplicada (LabMA/UFRJ), responsável pelas tábuas de mortalidade do mercado segurador brasileiro, e integra o corpo docente dos Programas de Pós-Graduação em Estatística e em Ciências Atuariais da UFRJ. Seus principais interesses de pesquisa são inferência bayesiana, processos espaço-temporais, modelagem atuarial e previsão de mortalidade.",
          redes: { instagram: "", linkedin: "", site: "sites.google.com/a/dme.ufrj.br/viviana/about-me", lattes: "", youtube: "", email: "viviana@dme.ufrj.br" }
        }
      },
      { horario: "12h00", tipo: "Intervalo", titulo: "Almoço", palestrante: null },
      {
        horario: "14h00",
        tipo: "Palestra",
        titulo: "Estatística Aplicada, Inteligência Artificial e o problema dos boletos",
        resumo: "Estatística Aplicada e o mercado para estatísticos.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao: "Conteúdo da palestra será divulgado em breve.",
        palestrante: {
          nome: "Paulo do Canto Hubert Junior",
          cargo: "Head of Data Science · ehab.co",
          foto: "styles/palestrantes/Paulo_Hubert.avif",
          bio:
            "Bacharel e Mestre em Estatística pelo IME-USP; Doutor em Matemática Aplicada pelo IME-USP, professor da EESP-FGV e EAESP-FGV entre 2011 e 2025, trabalhou em diversas empresas do mercado bem como participou como estatístico de diferentes grupos de pesquisa. Atualmente é head of Data Science na ehab.co.",
          redes: { instagram: "docantopaulo", linkedin: "", site: "", lattes: "", youtube: "", email: "" }
        }
      },
      {
        horario: "15h00",
        tipo: "Palestra",
        titulo: "Da concepção à mensuração: um dia na vida de Data Science na TELUS",
        resumo: "Um dia a dia real de squads de Data Science e IA em uma empresa multinacional.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao:
          "Como é trabalhar com dados e inteligência artificial em um ambiente corporativo real? Nesta palestra, exploramos o dia a dia de squads de Data Science e IA na TELUS Digital e detalhamos dois cases aplicados: um de recomendação de produtos e um de inteligência artificial, cobrindo desde a concepção dos modelos até a mensuração de resultados. Uma conversa aberta para quem quer entender a profissão na prática em uma empresa multinacional.",
        palestrante: {
          nome: "Equipe TELUS Digital",
          cargo: "TELUS Digital",
          foto: "logos/Telus.png",
          parceiro: true,
          bio:
            "A TELUS Digital é a divisão digital da TELUS e uma consultoria global de produtos e tecnologia que cria experiências digitais inovadoras, combinando estratégia, design, desenvolvimento, Data & AI, cloud, marketing digital e modernização de negócios para apoiar empresas em sua transformação digital.",
          redes: { instagram: "", linkedin: "", twitter: "", site: "", lattes: "", youtube: "", email: "" }
        }
      },
      { horario: "16h00", tipo: "Intervalo", titulo: "Coffee Break", palestrante: null }
    ]
  },
  {
    rotulo: "Ter",
    data: "29/09",
    diaSemana: "Terça-feira",
    sessoes: [
      { horario: "7h30", tipo: "Credenciamento", titulo: "Credenciamento", palestrante: null },
      {
        horario: "8h30",
        tipo: "Palestra",
        titulo: "Modelagem de processos de contagem e derivações: Aplicações em dados ambientais e epidemiológicos",
        resumo: "Modelos GAM-ARMA e GLARMA para séries de contagem na epidemiologia ambiental.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao:
          "Nesta palestra, serão apresentados os resultados centrais de uma linha de pesquisa dedicada à modelagem estatística de séries temporais de contagens na epidemiologia ambiental. A investigação parte da necessidade de aprimorar a análise de processos não Gaussianos e autocorrelacionados que descrevem a dinâmica de morbidade e mortalidade associada à exposição a poluentes atmosféricos. O primeiro estudo propõe o modelo GAM-ARMA, que combina funções splines a uma estrutura autorregressiva de médias móveis, permitindo capturar simultaneamente não linearidades e dependência temporal. O segundo integra o modelo GLARMA a diferentes abordagens de bootstrap, aprimorando a inferência do risco relativo em séries com poucas observações. O terceiro introduz um modelo GLARMA robusto, baseado em M-estimadores, com o objetivo de reduzir o impacto de observações atípicas em covariáveis ambientais. As aplicações com dados das regiões metropolitanas de Belo Horizonte/MG e Vitória/ES demonstram ganhos expressivos em ajuste, estabilidade e validade inferencial. Em conjunto, os trabalhos ampliam o uso dos modelos GLARMA, articulando robustez, flexibilidade e rigor estatístico na análise de fenômenos complexos de saúde e meio ambiente.",
        palestrante: {
          nome: "Ana Julia Alves Camara",
          cargo: "Professora · Universidade Federal de Lavras (UFLA)",
          foto: "styles/palestrantes/Ana_Júlia_Alves_Câmara.avif",
          bio:
            "Bacharel (2011), Mestre (2018) e Doutora (2023) em Estatística pela Universidade Federal de Minas Gerais, com estágio na Université Paris-Saclay/CentraleSupélec. Possui experiência em Séries Temporais, Modelos aditivos generalizados, Modelos robustos, Inferência Bayesiana, Análise de dados e Programação (R, Python e SQL). Atualmente é Professora do Departamento de Estatística da Universidade Federal de Lavras (UFLA).",
          redes: { instagram: "anaa.xjulia", linkedin: "", site: "", lattes: "", youtube: "", email: "anajulia.camara@gmail.com" }
        }
      },
      {
        horario: "9h30",
        tipo: "Palestra",
        titulo: "Bioestatística no século XXI: métodos bayesianos robustos e escaláveis em epidemiologia e ensaios clínicos",
        resumo: "Desafios metodológicos na conexão entre dados complexos e perguntas de pesquisa.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao:
          "Avanços recentes em Biologia e Medicina levaram ao acúmulo de conjuntos de dados enormes, tanto em tamanho quanto em complexidade. Essa avalanche de dados foi então confrontada com métodos matemáticos e estatísticos cada vez mais complexos, projetados para responder a questões quantitativas cada vez mais complexas. É justo dizer, no entanto, que os desenvolvimentos metodológicos têm lutado para acompanhar o ritmo. Nesta palestra, darei alguns exemplos dos desafios envolvidos na conexão entre os dados que temos e as perguntas que gostaríamos de responder, com foco particular em Epidemiologia. Ao final, apresentarei o programa de pós-graduação (Mestrado e Doutorado) em modelagem matemática e ciência de dados da FGV EMAp.",
        palestrante: {
          nome: "Monica Souza",
          cargo: "FGV EMAp — Escola de Matemática Aplicada",
          foto: "logos/FGV.avif",
          parceiro: true,
          bio:
            "A Escola de Matemática Aplicada da Fundação Getulio Vargas (FGV EMAp) é um centro de excelência em pesquisa e formação nas áreas de Matemática Aplicada e Ciência de Dados. Criada em 2011, desenvolve pesquisa na fronteira entre matemática, computação e suas aplicações, com atuação em controle e otimização, estatística, aprendizado de máquina e inteligência artificial, finanças e risco, epidemiologia, equações diferenciais e sistemas estocásticos. Seu Programa de Pós-Graduação possui conceito 5 na avaliação da CAPES.",
          redes: { instagram: "", linkedin: "", site: "", lattes: "", youtube: "", email: "" }
        }
      },
      { horario: "10h30", tipo: "Intervalo", titulo: "Coffee Break", palestrante: null },
      {
        horario: "11h00",
        tipo: "Palestra",
        titulo: "Perda de memória versus memória infinita: analisando dois tipos distintos de processos estocásticos",
        resumo: "Como o passado influencia o futuro? Dois modelos distintos para dependência temporal.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao:
          "Como o passado influencia o futuro? Em alguns fenômenos, os acontecimentos mais recentes exercem maior influência, enquanto lembranças distantes vão sendo gradualmente esquecidas. Em outros, toda a história do sistema continua relevante, independentemente de quão distante ela esteja. Nesta palestra, destinada a um público amplo, exploraremos essas duas formas distintas de modelar a dependência temporal por meio da Teoria da Probabilidade. Apresentaremos, de um lado, processos estocásticos com propriedade de perda de memória e, de outro, processos com memória infinita, nos quais todo o passado permanece atuando na evolução do sistema. Ao longo da apresentação, discutiremos as principais diferenças entre esses modelos, destacando suas características matemáticas e algumas de suas aplicações. Ao final, apresentaremos brevemente resultados recentes obtidos em colaboração com M. Abadi, E. Rada-Mora, M. González-Navarrete e V. Vázquez-Guevara.",
        palestrante: {
          nome: "Rodrigo Lambert",
          cargo: "Doutor em Estatística (IME-USP) e em Matemática (UTLN, França)",
          foto: "styles/palestrantes/Rodrigo_Lambert.avif",
          bio:
            "Doutor em Estatística pelo IME-USP, e em Matemática pela UTLN-França. Tem interesse em teoremas-limite para processos estocásticos com e sem perda de memória.",
          redes: { instagram: "", linkedin: "", site: "", lattes: "", youtube: "", email: "tupetelambert@gmail.com" }
        }
      },
      { horario: "12h00", tipo: "Intervalo", titulo: "Almoço", palestrante: null },
      {
        horario: "14h00",
        tipo: "Palestra",
        titulo: "Reconstruindo a dieta de povos pré-históricos",
        resumo: "Reconstrução da dieta de populações que viveram no passado a partir da composição dos ossos.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao:
          "Será apresentado um modelo bayesiano desenvolvido em conjunto por estatísticos e bioarqueólogos para a estimação da proporção de consumo de diferentes fontes alimentares a partir de razões isotópicas de carbono e nitrogênio obtidas de amostras de ossos e dentes presentes em sambaquis do estado de São Paulo. Será discutida as técnicas para a utilização dos dados amostrais, o modelo estatístico e formas de análise exploratória para auxiliar na interpretação dos resultados.",
        palestrante: {
          nome: "André Americano de Freitas Fumis",
          cargo: "Cientista de Dados Sênior · Itaú Unibanco",
          foto: "styles/palestrantes/Andre_Americano.jpg",
          bio:
            "André é estatístico formado pelo IME-USP e estudante de doutorado no Programa de Probabilidade e Estatística do mesmo instituto, além de ser Cientista de Dados Sênior no Itaú Unibanco. Sua pesquisa é focada no uso de teoria de decisão bayesiana para desenho experimental e inferência causal. No mercado, atua na área de recuperação de crédito, com estatística e machine learning para auxiliar nas ofertas de renegociação para clientes em atraso.",
          redes: { instagram: "", linkedin: "", site: "", lattes: "", youtube: "", email: "" }
        }
      },
      {
        horario: "15h00",
        tipo: "Palestra",
        titulo: "Explorando a Estatística com as calculadoras científicas e gráficas CASIO",
        resumo: "Oficina prática com calculadoras científicas CASIO aplicadas à Estatística.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao:
          "Descubra, na prática, como as calculadoras CASIO podem tornar a exploração estatística mais dinâmica, visual e conectada a situações reais. Durante a atividade, o público poderá experimentar recursos para organizar e analisar dados, calcular medidas estatísticas, investigar probabilidades, construir modelos de regressão e interpretar diferentes representações e investigar distribuições. Por meio de demonstrações e pequenos desafios, será possível observar como a tecnologia auxilia não apenas na realização dos cálculos, mas também na compreensão dos resultados, na identificação de padrões e na tomada de decisões fundamentadas em dados com testes estatísticos.",
        palestrante: {
          nome: "Equipe CASIO Educação",
          cargo: "CASIO Educação",
          foto: "logos/Casio.avif",
          parceiro: true,
          bio:
            "A CASIO é uma empresa global de calculadoras científicas e gráficas que transforma ideias em soluções para o dia a dia. No Brasil, a CASIO Educação atua há dez anos apoiando escolas, professores e estudantes com calculadoras, formação docente e projetos que tornam a aprendizagem da Matemática mais significativa.",
          redes: { instagram: "", linkedin: "", site: "", lattes: "", youtube: "", email: "" }
        }
      },
      { horario: "16h00", tipo: "Intervalo", titulo: "Coffee Break", palestrante: null }
    ]
  },
  {
    rotulo: "Qua",
    data: "30/09",
    diaSemana: "Quarta-feira",
    sessoes: [
      { horario: "8h00", tipo: "Credenciamento", titulo: "Credenciamento", palestrante: null },
      {
        horario: "8h30",
        tipo: "Palestra",
        titulo: "A importância do estatístico num mundo impulsionado por IAs",
        resumo: "O olhar crítico do estatístico diante do avanço acelerado das IAs no mercado de trabalho.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao:
          "No mercado de trabalho, percebe-se um crescimento acelerado na implantação de soluções via modelos de IAs. No entanto, é notório também o crescimento da insatisfação diante de falhas, modelos equivocados, faltas de lógica nas implantações de IAs. Como o senso crítico de profissionais com sólido conhecimento técnico estatístico pode ajudar a melhorar o uso de IAs?",
        palestrante: {
          nome: "Doris Satie M. Fontes",
          cargo: "Bacharel em Estatística · IME-USP",
          foto: "styles/palestrantes/Doris_S_Fontes.avif",
          bio:
            "Bacharel em Estatística pelo IME-USP (1982), tem atuado no CONRE-3 (Conselho Regional de Estatística da 3ª Região - SP) desde 2004, assumindo diferentes cargos na diretoria, sempre com o foco na divulgação e fortalecimento da estatística e do estatístico no mercado de trabalho e entre estudantes de Ensino Médio. Tem participado de inúmeros eventos acadêmicos e feiras de profissão. Trata-se de um trabalho voluntário, sem remuneração, e este ano com mandato de tesoureira até dezembro de 2026.",
          redes: { instagram: "", linkedin: "dsfontes", site: "", lattes: "", youtube: "", email: "dsfontes@gmail.com" }
        }
      },
      {
        horario: "9h30",
        tipo: "Palestra",
        titulo: "Análise de Sobrevivência aplicada à Ciência Animal: conceitos, desafios e perspectivas",
        resumo: "Métodos estatísticos para o estudo do tempo até a ocorrência de um evento na Ciência Animal.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao:
          "A Análise de Sobrevivência reúne métodos estatísticos destinados ao estudo do tempo até a ocorrência de um determinado evento, permitindo lidar adequadamente com informações censuradas e diferentes padrões de risco ao longo do tempo. Nesta palestra, serão apresentados os principais conceitos dessa abordagem e suas possibilidades de aplicação na Ciência Animal, especialmente no estudo de características reprodutivas, produtivas e de longevidade. A partir de exemplos aplicados, serão discutidas as particularidades e os desafios envolvidos na modelagem desse tipo de dado, bem como a interpretação dos resultados e sua contribuição para a compreensão de fenômenos biológicos. Por fim, serão abordadas perspectivas para a integração da Análise de Sobrevivência com informações genéticas e genômicas, evidenciando o potencial dessa metodologia como ferramenta para a pesquisa e a tomada de decisão na Ciência Animal.",
        palestrante: {
          nome: "Sabrina Luzia Caetano",
          cargo: "Professora · UNESP Jaboticabal",
          foto: "styles/palestrantes/Sabrina_Luzia_Caetano.avif?v=2",
          bio:
            "Estatística formada pela Universidade Federal de São Carlos (UFSCar), é doutora em Genética e Melhoramento Animal pela UNESP, com período de pesquisa na University of Wisconsin-Madison. Atualmente é professora da UNESP, campus de Jaboticabal, atuando no ensino e na pesquisa com Estatística aplicada às Ciências Agrárias, com ênfase em Análise de Sobrevivência aplicada a características reprodutivas e de longevidade. Coordena o SURVGEN, grupo de pesquisa dedicado a métodos estatísticos, genéticos e genômicos na Ciência Animal.",
          redes: { instagram: "sacaetano", linkedin: "", site: "", lattes: "", youtube: "", email: "sabrina.caetano@unesp.br" }
        }
      },
      { horario: "10h30", tipo: "Intervalo", titulo: "Coffee Break", palestrante: null },
      {
        horario: "11h00",
        tipo: "Palestra",
        titulo: "Aplicação de modelos defeituosos na análise de sobrevivência de recém-nascidos prematuros",
        resumo: "Modelos de sobrevivência com fração de cura aplicados a recém-nascidos prematuros em UTI neonatal.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao:
          "Modelos de sobrevivência com fração de cura constituem uma abordagem apropriada para situações em que parte da população não é suscetível à ocorrência do evento de interesse. Neste estudo, foram analisados dados de 674 recém-nascidos prematuros internados na Unidade de Terapia Intensiva Neonatal da Maternidade Escola Januário Cicco (MEJC), em Natal, Rio Grande do Norte, no período de 2019 a 2023. A análise não paramétrica estimou uma taxa de mortalidade de 21,4%, com elevada proporção de observações censuradas, indicando a presença de uma fração de indivíduos não suscetíveis ao óbito. Adicionalmente, características neonatais e complicações clínicas mostraram-se relevantes para a determinação da sobrevida dos recém-nascidos. Na análise paramétrica, foram considerados os modelos de regressão Gompertz defeituoso e gaussiano inverso defeituoso, com incorporação direta das covariáveis ao parâmetro associado à fração de cura, permitindo estimar a proporção de indivíduos não suscetíveis ao evento de interesse sem a necessidade de segmentação explícita da população. Entre os modelos avaliados, o Gompertz defeituoso apresentou o melhor desempenho, segundo critérios gráficos de seleção e os critérios de informação de Akaike (AIC) e Bayesiano (BIC). A análise de perfis prognósticos evidenciou acentuada heterogeneidade na fração de cura, com probabilidades elevadas entre neonatos submetidos a condições clínicas favoráveis e valores próximos de zero na presença simultânea de múltiplos fatores adversos. Esses resultados evidenciam o efeito cumulativo dos fatores de risco sobre a probabilidade de óbito e reforçam a adequação dos modelos de sobrevivência com fração de cura para a caracterização da heterogeneidade prognóstica em recém-nascidos prematuros.",
        palestrante: {
          nome: "Francisco Moisés Cândido de Medeiros",
          cargo: "Professor Associado · Universidade Federal do Rio Grande do Norte (UFRN)",
          foto: "styles/palestrantes/Moisés_Medeiros.avif",
          bio:
            "Possui graduação em Matemática (2007), mestrado em Matemática Aplicada e Estatística (2010) pela Universidade Federal do Rio Grande do Norte e doutorado em Estatística pela Universidade de São Paulo (2016). Atualmente é professor associado do Departamento de Estatística na Universidade Federal do Rio Grande do Norte. Tem experiência na área de estatística com ênfase em inferência estatística, modelos de regressão, métodos assintóticos e análise de sobrevivência.",
          redes: { instagram: "sesiomedeiros", linkedin: "", site: "", lattes: "", youtube: "", email: "sesiommedeiros@gmail.com" }
        }
      },
      { horario: "12h00", tipo: "Intervalo", titulo: "Almoço", palestrante: null },
      {
        horario: "14h00",
        tipo: "Palestra",
        titulo: "Palestra do Insper (em breve)",
        resumo: "Detalhes em breve.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao: "Conteúdo da palestra será divulgado em breve.",
        palestrante: {
          nome: "Luiza Alcântara",
          cargo: "Insper",
          foto: "logos/Insper.avif",
          parceiro: true,
          bio:
            "O Insper é uma instituição independente e sem fins lucrativos, referência em educação e geração de conhecimento por meio do ensino de excelência e da pesquisa nas áreas de Administração, Economia, Direito, Engenharia, Políticas Públicas, Tecnologia e Comunicação. A escola tem as certificações de qualidade da AACSB, AMBA e EQUIS.",
          redes: { instagram: "", linkedin: "", site: "www.insper.edu.br", lattes: "", youtube: "", email: "" }
        }
      },
      {
        horario: "15h00",
        tipo: "Palestra",
        titulo: "Programa de Pós-graduação em Estatística",
        resumo: "Um relato pessoal sobre a rotina e os primeiros passos na pós-graduação em Estatística.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao:
          "A partir de sua própria trajetória, o palestrante vai contar como é a rotina da pós-graduação em Estatística no IME-USP, compartilhando as alegrias e os desafios de dar os primeiros passos como pesquisador. Uma conversa aberta e sincera para quem está pensando em seguir pela carreira acadêmica.",
        palestrante: {
          nome: "Conrado Freitas Paulo da Costa",
          cargo: "Economista · Doutor em Probabilidade (Mecânica Estatística)",
          foto: "styles/palestrantes/Conrado_Freitas.avif",
          bio:
            "Economista de formação, com doutorado e pós-doutorado em Probabilidade ligada à Mecânica Estatística.",
          redes: { instagram: "", linkedin: "", site: "", lattes: "", youtube: "", email: "" }
        }
      },
      { horario: "16h00", tipo: "Intervalo", titulo: "Coffee Break", palestrante: null }
    ]
  },
  {
    rotulo: "Qui",
    data: "01/10",
    diaSemana: "Quinta-feira",
    sessoes: [
      { horario: "8h00", tipo: "Credenciamento", titulo: "Credenciamento", palestrante: null },
      {
        horario: "8h30",
        tipo: "Palestra",
        titulo: "Comparando o incomparável? Propensity Score e a busca por comparações justas em estudos observacionais",
        resumo: "Como comparar grupos diferentes de pacientes de forma justa em estudos observacionais.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao:
          "É possível comparar dois grupos de pacientes que, à primeira vista, são completamente diferentes? Como saber se um tratamento é potencialmente responsável por um melhor desfecho ou se as diferenças observadas são consequência das características dos próprios pacientes? Nesta palestra, conheceremos o Propensity Score, uma metodologia amplamente utilizada em pesquisas observacionais para realizar comparações mais justas. Por meio de exemplos práticos na área da saúde, serão apresentados os princípios dessa abordagem, suas aplicações, vantagens e limitações, mostrando como a Estatística pode ajudar a responder importantes questões científicas.",
        palestrante: {
          nome: "Magda Carvalho Pires",
          cargo: "Professora Titular · Universidade Federal de Minas Gerais (UFMG)",
          foto: "styles/palestrantes/Magda_Pires.avif",
          bio:
            "Professora titular do Departamento de Estatística da Universidade Federal de Minas Gerais (UFMG), onde também concluiu sua graduação, mestrado e doutorado em Estatística. Atua na área de Bioestatística colaborando com pesquisadores de diferentes áreas da saúde. Além das atividades de ensino na graduação e na pós-graduação, dedica-se à orientação de estudantes, à pesquisa interdisciplinar e à extensão universitária.",
          redes: { instagram: "profa.magdapires", linkedin: "", site: "", lattes: "", youtube: "", email: "magdacpires@gmail.com" }
        }
      },
      {
        horario: "9h30",
        tipo: "Palestra",
        titulo: "Durabilidade dos anticorpos neutralizantes como resposta imune da vacina contra a dengue do Instituto Butantan, Butantan-DV",
        resumo: "Durabilidade dos anticorpos neutralizantes da vacina Butantan-DV contra a dengue.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao: "Durabilidade dos anticorpos neutralizantes como resposta imune da vacina contra a dengue do Instituto Butantan, Butantan-DV.",
        palestrantes: [
          {
            nome: "Elizabeth G. Patiño",
            cargo: "Coordenadora de Desenvolvimento Clínico · Instituto Butantan",
            foto: "styles/palestrantes/Elizabeth.avif",
            bio:
              "Possui graduação em Tecnologia em Sistemas de Informação em Saúde pela Universidad de Antioquia (2003), graduação em Estatística pela Universidad Nacional de Colombia - Sede Medellín (2009), mestrado em Estatística pelo Instituto de Matemática e Estatística da USP (2012) e doutorado em Estatística pela USP (2018). Atualmente é coordenadora de desenvolvimento clínico do Instituto Butantan, com experiência na área de Probabilidade e Estatística.",
            redes: { instagram: "", linkedin: "", site: "", lattes: "", youtube: "", email: "" }
          },
          {
            nome: "Pedro Henrique Theotonio De Mesquita Pacheco",
            cargo: "Bioestatístico · Fundação Butantan",
            foto: "styles/palestrantes/Pedro_Henrique.avif",
            bio:
              "Bacharel em Estatística (2021) e Bacharel em Ciências Exatas (2020) pela Universidade Federal de Juiz de Fora. Atualmente é Bioestatístico na Fundação Butantan, atuando principalmente com Ensaios Clínicos, Análise Estatística e Programação Estatística em R.",
            redes: { instagram: "", linkedin: "", site: "", lattes: "", youtube: "", email: "" }
          }
        ]
      },
      { horario: "10h30", tipo: "Intervalo", titulo: "Coffee Break", palestrante: null },
      {
        horario: "11h00",
        tipo: "Palestra",
        titulo: "Desafios em Estudos de Atribuição do Clima na Saúde Humana",
        resumo: "Como métodos estatísticos ajudam a atribuir impactos climáticos e ambientais na saúde humana.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao:
          "Palestra sobre os desafios metodológicos em estudos de atribuição do clima na saúde humana, área de pesquisa da palestrante na interface entre Estatística, Epidemiologia Ambiental e Saúde Coletiva, com métodos estatísticos aplicados à investigação dos impactos das mudanças climáticas, da poluição do ar e de outros fatores ambientais sobre a saúde humana.",
          palestrante: {
          nome: "Ludmilla da Silva Viana Jacobson",
          cargo: "Professora Associada · Universidade Federal Fluminense (UFF)",
          foto: "styles/palestrantes/Ludmilla_Viana_Jacobson.avif",
          bio:
            "Professora Associada do Departamento de Estatística do Instituto de Matemática e Estatística da UFF. Bacharel em Estatística pela UERJ, Mestre em Estudos Populacionais e Pesquisas Sociais (ENCE/IBGE), Doutora em Saúde Coletiva (IMS/UERJ) e Pós-Doutora em Saúde Pública e Meio Ambiente (ENSP/Fiocruz). Desenvolve pesquisas na interface entre Estatística, Epidemiologia Ambiental e Saúde Coletiva, investigando os impactos das mudanças climáticas e da poluição do ar sobre a saúde humana.",
          redes: { instagram: "", linkedin: "", site: "", lattes: "", youtube: "", email: "ludmillaviana@yahoo.com.br" }
        }
      },
      { horario: "12h00", tipo: "Intervalo", titulo: "Almoço", palestrante: null },
      {
        horario: "14h00",
        tipo: "Palestra",
        titulo: "R-Ladies (em breve)",
        resumo: "Detalhes em breve.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao: "Informações sobre esta atividade serão divulgadas em breve.",
        palestrante: null
      },
      {
        horario: "15h00",
        tipo: "Palestra",
        titulo: "Dados, Estatística e IA ajudando as pessoas a viverem sua melhor vida financeira",
        resumo: "Como dados, estatística e IA são aplicados no mercado financeiro.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao: "Na palestra abordaremos como os Dados, a Estatística e a IA estão sendo aplicadas no mercado financeiro.",
        palestrante: {
          nome: "Marcos Coque",
          cargo: "Equifax | Boa Vista",
          foto: "logos/Equifax.avif",
          parceiro: true,
          bio:
            "A Equifax | Boa Vista é uma potência global de dados, analytics e tecnologia, com mais de 100 anos de existência e referência no mercado de crédito no Brasil e no mundo. Para a empresa, a Ciência de Dados é o core business: o time de Data Science gerencia mais de 150 modelos preditivos por ano, otimizando bilhões em concessões de crédito. Trabalham com tecnologias de fronteira, de AutoML a Inteligência Artificial Generativa (GenAI) e Machine Learning Explicável (XAI).",
          redes: { instagram: "", linkedin: "", site: "https://www.equifax.com.br/", lattes: "", youtube: "", email: "" }
        }
      },
      {
        horario: "16h00",
        tipo: "Pôsteres",
        titulo: "Coffee Break + Pôsteres do CEA",
        resumo: "Alunos do último semestre de Estatística apresentam os pôsteres do CEA.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao:
          "Durante o coffee break da tarde, os alunos do último semestre de Estatística apresentarão os pôsteres do CEA (Centro de Estatística Aplicada), com os resultados dos projetos e consultorias estatísticas desenvolvidos ao longo do curso.",
        palestrante: null
      }
    ]
  },
  {
    rotulo: "Sex",
    data: "02/10",
    diaSemana: "Sexta-feira",
    sessoes: [
      { horario: "8h00", tipo: "Credenciamento", titulo: "Credenciamento + Coffee Break", palestrante: null },
      {
        horario: "9h00",
        tipo: "Mesa-redonda",
        titulo: "Estatística na Política",
        resumo: "Pesquisas eleitorais, dados e o papel da estatística na compreensão das eleições e da realidade política.",
        local: "Auditório Jacy Monteiro — Bloco B, IME-USP",
        descricao:
          "Pesquisas eleitorais, dados e o papel da estatística na compreensão das eleições e da realidade política. Mesa-redonda das 9h às 12h com pesquisadores da Ciência Política e da Estatística.",
        palestrantes: [
          {
            nome: "Vinicius Pinheiro Israel",
            cargo: "Professor Adjunto · UNIRIO (Depto. de Métodos Quantitativos)",
            foto: "styles/palestrantes/Vinicius_Pinheiro_Israel.avif",
            bio:
              "Professor e pesquisador com trajetória interdisciplinar, unindo as Ciências Exatas e as Ciências Sociais. Graduado em Matemática (UFRJ) e em Ciências Sociais (UERJ), com duplo doutorado em Estatística (UFRJ) e em Sociologia (IESP/UERJ). Atualmente é Professor Adjunto no Departamento de Métodos Quantitativos da UNIRIO, aplicando metodologias quantitativas e estatísticas ao estudo de temas como comportamento eleitoral, estratificação social e segurança pública.",
            redes: { instagram: "viniciuspisrael", linkedin: "", twitter: "", site: "", lattes: "", youtube: "", email: "vinicius.israel@uniriotec.br" }
          },
          {
            nome: "Lorena G. Barberia",
            cargo: "Profa. Dra. · Depto. de Ciência Política, USP",
            foto: "styles/palestrantes/Lorena_Barberia.avif",
            bio:
              "Professora Doutora, com Livre Docência, do Departamento de Ciência Política da Universidade de São Paulo (USP).",
            redes: { instagram: "", linkedin: "linkedin.com/in/lorena-barberia-5a4ba11", twitter: "", site: "", lattes: "", youtube: "", email: "lorenabarberia@usp.br" }
          },
          {
            nome: "Manoel Galdino",
            cargo: "Professor · Depto. de Ciência Política, USP (CSEX)",
            foto: "styles/palestrantes/Manoel_Galdino_Pereira_Neto.avif",
            bio:
              "Manoel Galdino Pereira Neto é professor do Departamento de Ciência Política da Universidade de São Paulo (USP) e diretor do Laboratório de Ciências Sociais Experimentais e Computacionais (CSEX). Graduado em Ciências Econômicas, é mestre e doutor em Ciência Política pela USP. Foi diretor-executivo da Transparência Brasil entre 2016 e 2022. Sua pesquisa articula métodos quantitativos, inferência causal e ciência social computacional ao estudo da política, da transparência e das relações internacionais.",
            redes: { instagram: "", linkedin: "", twitter: "twitter.com/mgaldino", site: "", lattes: "", youtube: "", email: "mgaldino@usp.br" }
          },
          {
            nome: "Doris Satie M. Fontes",
            cargo: "CONRE-3 (Conselho Regional de Estatística — 3ª Região, SP)",
            foto: "styles/palestrantes/Doris_S_Fontes.avif",
            bio:
              "Bacharel em Estatística pelo IME-USP (1982), tem atuado no CONRE-3 (Conselho Regional de Estatística da 3ª Região - SP) desde 2004, assumindo diferentes cargos na diretoria, sempre com o foco na divulgação e fortalecimento da estatística e do estatístico no mercado de trabalho e entre estudantes de Ensino Médio.",
            redes: { instagram: "", linkedin: "dsfontes", twitter: "", site: "", lattes: "", youtube: "", email: "dsfontes@gmail.com" }
          }
        ]
      }
    ]
  }
];

/* ============================ (motor — não precisa mexer) ============================ */
(function () {
  "use strict";

  // Metadados visuais por tipo de sessão.
  const TIPOS = {
    "Palestra":     { icone: "fa-microphone",      cor: "bg-red-700",  clara: "bg-red-50 text-red-800 border-red-100" },
    "Minicurso":    { icone: "fa-laptop",          cor: "bg-red-800",  clara: "bg-amber-50 text-amber-800 border-amber-100" },
    "Mesa-redonda": { icone: "fa-users",           cor: "bg-red-600",  clara: "bg-red-50 text-red-800 border-red-100" },
    "Cerimônia":    { icone: "fa-star",            cor: "bg-gold-deep",clara: "bg-amber-50 text-amber-800 border-amber-100" },
    "Intervalo":    { icone: "fa-coffee",          cor: "bg-gray-300", clara: "bg-gray-100 text-gray-500 border-gray-200" },
    "Credenciamento": { icone: "fa-id-badge",      cor: "bg-gray-300", clara: "bg-gray-100 text-gray-500 border-gray-200" },
    "Em breve":     { icone: "fa-hourglass-half",  cor: "bg-gray-300", clara: "bg-gray-100 text-gray-500 border-gray-200" },
    "Pôsteres":     { icone: "fa-picture-o",       cor: "bg-gold-deep",clara: "bg-amber-50 text-amber-800 border-amber-100" }
  };
  const TIPO_PADRAO = { icone: "fa-calendar", cor: "bg-red-700", clara: "bg-red-50 text-red-800 border-red-100" };
  const meta = (t) => TIPOS[t] || TIPO_PADRAO;

  // Ícones das redes sociais (Font Awesome 4, já carregado no site).
  const REDES = {
    instagram: { icone: "fa-instagram",     rotulo: "Instagram" },
    linkedin:  { icone: "fa-linkedin",      rotulo: "LinkedIn"  },
    twitter:   { icone: "fa-twitter",       rotulo: "Twitter/X" },
    site:      { icone: "fa-globe",         rotulo: "Website"   },
    lattes:    { icone: "fa-graduation-cap",rotulo: "Lattes"    },
    youtube:   { icone: "fa-youtube-play",  rotulo: "YouTube"   },
    email:     { icone: "fa-envelope",      rotulo: "E-mail"    }
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  }
  // Vira um nome em slug de URL (usado para linkar direto ao perfil na página
  // de Palestrantes). Exposta em window para a página de Palestrantes reusar.
  function slugify(s) {
    return String(s || "")
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
  window.slugifyNome = slugify;
  function href(rede, valor) {
    if (!valor) return "";
    if (rede === "email") return "mailto:" + valor;
    return /^https?:\/\//i.test(valor) ? valor : "https://" + valor;
  }

  function redesHTML(redes) {
    if (!redes) return "";
    const itens = Object.keys(REDES)
      .filter((k) => redes[k])
      .map((k) => {
        const r = REDES[k];
        return `<a href="${esc(href(k, redes[k]))}" target="_blank" rel="noreferrer"
          class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:bg-red-700 hover:text-white transition-colors"
          title="${r.rotulo}" aria-label="${r.rotulo}"><i class="fa ${r.icone}"></i></a>`;
      });
    if (!itens.length) return "";
    return `<div class="flex flex-wrap gap-2 mt-4">${itens.join("")}</div>`;
  }
  // Exposta em window para a página de Palestrantes reusar o mesmo mapa de ícones.
  window.redesHTML = redesHTML;

  // ---- Modal (criado uma vez e reaproveitado) ----
  let modalEl = null;
  function garantirModal() {
    if (modalEl) return modalEl;
    modalEl = document.createElement("div");
    modalEl.id = "modal-cronograma";
    modalEl.className = "hidden fixed inset-0 z-[60] flex items-center justify-center p-4";
    modalEl.innerHTML = `
      <div data-fechar class="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm"></div>
      <div class="relative z-10 bg-white rounded-2xl max-w-lg w-full max-h-[88vh] overflow-y-auto shadow-2xl border border-neutral-100"
           role="dialog" aria-modal="true" aria-labelledby="modal-cron-titulo">
        <div class="p-6 sm:p-7" id="modal-cron-conteudo"></div>
      </div>`;
    document.body.appendChild(modalEl);
    modalEl.querySelector("[data-fechar]").addEventListener("click", fecharModal);
    return modalEl;
  }
  function blocoPalestrante(p, ehPrimeiro) {
    // Logos de parceiros ficam com fundo branco e "contain" (não cortar o logo);
    // fotos de pessoas preenchem o círculo inteiro ("cover").
    const foto = p && p.foto
      ? (p.parceiro
          ? `<img src="${esc(p.foto)}" alt="${esc(p.nome)}" loading="lazy" class="w-full h-full object-contain bg-white p-1.5">`
          : `<img src="${esc(p.foto)}" alt="${esc(p.nome)}" loading="lazy" class="w-full h-full object-cover">`)
      : `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-800 to-red-600 text-white text-2xl"><i class="fa fa-user"></i></div>`;

    // No cronograma mostramos só nome + cargo/instituição — o resumo completo
    // fica na página de Parceiros (empresas) ou na de Palestrantes (acadêmicos).
    const cabecalho = `
        <div class="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-gold/40 bg-gray-100">${foto}</div>
        <div class="min-w-0">
          <h4 class="font-spartan text-lg font-bold text-gray-900 leading-tight">${esc(p.nome)}</h4>
          ${p.cargo ? `<p class="text-sm text-red-700 font-medium">${esc(p.cargo)}</p>` : ""}
        </div>`;
    const link = p.parceiro ? "./pages/patrocinadores.html" : "./pages/palestrantes.html#" + slugify(p.nome);
    const titulo = p.parceiro ? "Ver na página de parceiros" : "Ver perfil completo";

    return `
      <div class="${ehPrimeiro ? "mt-6 pt-6 border-t border-gray-100" : "mt-6 pt-6 border-t border-gray-100"}">
        <a href="${link}" class="flex items-start gap-4 group -m-1.5 p-1.5 rounded-xl hover:bg-gray-50 transition-colors" title="${titulo}">
          ${cabecalho}
          <i class="fa fa-external-link text-gray-300 group-hover:text-red-700 transition-colors mt-1"></i>
        </a>
      </div>`;
  }

  function abrirModal(s) {
    const m = garantirModal();
    const t = meta(s.tipo);
    const lista = s.palestrantes && s.palestrantes.length ? s.palestrantes : (s.palestrante ? [s.palestrante] : []);

    const palestranteBloco = lista.length ? `
      <div class="mt-2">
        <span class="text-[11px] font-bold uppercase tracking-wider text-gray-400">${lista.length > 1 ? "Palestrantes" : "Palestrante"}</span>
        ${lista.map((p, i) => blocoPalestrante(p, i === 0)).join("")}
      </div>` : "";

    m.querySelector("#modal-cron-conteudo").innerHTML = `
      <div class="flex items-start justify-between gap-4 mb-4">
        <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${t.clara}">
          <i class="fa ${t.icone}"></i> ${esc(s.tipo || "Atividade")}
        </span>
        <button data-fechar class="text-neutral-400 hover:text-neutral-700 p-1 -mr-1 rounded-lg hover:bg-neutral-100 transition" aria-label="Fechar">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <h3 id="modal-cron-titulo" class="font-spartan text-2xl font-black text-gray-900 leading-tight">${esc(s.titulo)}</h3>
      <div class="flex flex-wrap items-center gap-x-5 gap-y-1 mt-3 text-sm text-gray-500">
        ${s.horario ? `<span class="inline-flex items-center gap-1.5"><i class="fa fa-clock-o text-gold-deep"></i> ${esc(s.horario)}</span>` : ""}
        ${s.local ? `<span class="inline-flex items-center gap-1.5"><i class="fa fa-map-marker text-gold-deep"></i> ${esc(s.local)}</span>` : ""}
      </div>
      ${s.descricao ? `<p class="text-gray-600 leading-relaxed mt-5">${esc(s.descricao)}</p>` : ""}
      ${palestranteBloco}`;

    m.querySelectorAll("[data-fechar]").forEach((b) => b.addEventListener("click", fecharModal));
    m.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }
  function fecharModal() {
    if (!modalEl) return;
    modalEl.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalEl && !modalEl.classList.contains("hidden")) fecharModal();
  });

  // ---- Render de abas + lista ----
  function cardSessao(s) {
    const t = meta(s.tipo);
    const multiplos = s.palestrantes && s.palestrantes.length > 1;
    const clicavel = !!(s.palestrante || (s.palestrantes && s.palestrantes.length) || (s.descricao && s.tipo !== "Intervalo"));
    const isIntervalo = s.tipo === "Intervalo" || s.tipo === "Credenciamento" || s.tipo === "Em breve";

    const p = s.palestrante || (s.palestrantes && s.palestrantes.length === 1 ? s.palestrantes[0] : null);
    const wrap = document.createElement(clicavel ? "button" : "div");
    if (clicavel) { wrap.type = "button"; }
    wrap.className =
      "w-full text-left flex items-center gap-4 rounded-xl border p-4 transition-all " +
      (isIntervalo
        ? "bg-gray-50 border-gray-100"
        : "bg-white border-gray-100 shadow-sm" +
          (clicavel ? " relative group hover:shadow-md hover:-translate-y-0.5 hover:border-gold/40 hover:z-20 cursor-pointer" : ""));

    // Mini-avatar para o popover de hover.
    const fotoMini = p && p.foto
      ? (p.parceiro
          ? `<img src="${esc(p.foto)}" alt="${esc(p.nome)}" loading="lazy" class="w-full h-full object-contain bg-white p-1">`
          : `<img src="${esc(p.foto)}" alt="${esc(p.nome)}" loading="lazy" class="w-full h-full object-cover">`)
      : `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-800 to-red-600 text-white"><i class="fa fa-user"></i></div>`;

    // Popover que aparece ao passar o mouse (desktop) — no clique/celular abre o modal completo.
    const popover = clicavel ? `
      <div class="absolute left-2 right-2 top-full mt-2 z-30 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 pointer-events-none bg-white rounded-xl shadow-xl ring-1 ring-black/5 p-4 text-left">
        <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mb-2">
          ${s.horario ? `<span class="inline-flex items-center gap-1.5"><i class="fa fa-clock-o text-gold-deep"></i> ${esc(s.horario)}</span>` : ""}
          ${s.local ? `<span class="inline-flex items-center gap-1.5"><i class="fa fa-map-marker text-gold-deep"></i> ${esc(s.local)}</span>` : ""}
        </div>
        ${s.descricao ? `<p class="text-sm text-gray-600 leading-relaxed line-clamp-3">${esc(s.descricao)}</p>` : ""}
        ${multiplos ? `<p class="text-xs text-gray-500 mt-3 pt-3 border-t border-gray-100">${esc(s.palestrantes.map((x) => x.nome).join(", "))}</p>`
          : (p ? `<div class="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
            <div class="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-gold/40 bg-gray-100">${fotoMini}</div>
            <div class="min-w-0">
              <p class="text-sm font-bold text-gray-900 leading-tight truncate">${esc(p.nome)}</p>
              ${p.cargo ? `<p class="text-xs text-red-700 truncate">${esc(p.cargo)}</p>` : ""}
            </div>
          </div>` : "")}
        <p class="mt-3 text-[11px] font-bold uppercase tracking-wider text-red-700">Clique para ver tudo &rarr;</p>
      </div>` : "";

    wrap.innerHTML = `
      <div class="flex-shrink-0 w-16 text-center">
        <span class="font-spartan font-bold ${isIntervalo ? "text-gray-400" : "text-red-700"} tabular-nums">${esc(s.horario || "")}</span>
      </div>
      <span class="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg ${t.cor} text-white">
        <i class="fa ${t.icone}"></i>
      </span>
      <div class="min-w-0 flex-grow">
        <p class="font-semibold ${isIntervalo ? "text-gray-500" : "text-gray-900"} leading-snug">${esc(s.titulo)}</p>
        ${multiplos ? `<p class="text-sm text-gray-500 truncate">${esc(s.palestrantes.map((x) => x.nome).join(", "))}</p>`
          : (p && p.nome ? `<p class="text-sm text-gray-500 truncate">${esc(p.nome)}</p>`
          : (s.resumo && !isIntervalo ? `<p class="text-sm text-gray-500 truncate">${esc(s.resumo)}</p>` : ""))}
      </div>
      ${clicavel ? `<i class="fa fa-chevron-right text-gray-300 flex-shrink-0"></i>` : ""}
      ${popover}`;

    if (clicavel) wrap.addEventListener("click", () => abrirModal(s));
    return wrap;
  }

  function render(indiceDia, refs) {
    const dia = window.CRONOGRAMA[indiceDia];
    // abas
    refs.tabs.innerHTML = "";
    window.CRONOGRAMA.forEach((d, i) => {
      const b = document.createElement("button");
      b.type = "button";
      const ativo = i === indiceDia;
      b.className =
        "px-4 py-2 rounded-full text-sm font-montserrat font-semibold transition-colors border " +
        (ativo
          ? "bg-red-700 text-white border-red-700 shadow-sm"
          : "bg-white text-gray-600 border-gray-200 hover:border-red-300 hover:text-red-700");
      b.innerHTML = `${esc(d.rotulo)} <span class="opacity-70 font-normal">${esc(d.data)}</span>`;
      b.addEventListener("click", () => render(i, refs));
      refs.tabs.appendChild(b);
    });
    // lista
    refs.lista.innerHTML = "";
    if (!dia || !dia.sessoes || !dia.sessoes.length) {
      refs.vazio.classList.remove("hidden");
      return;
    }
    refs.vazio.classList.add("hidden");
    dia.sessoes.forEach((s) => refs.lista.appendChild(cardSessao(s)));
  }

  document.addEventListener("DOMContentLoaded", () => {
    const lista = document.getElementById("cronograma-lista");
    if (!lista || !Array.isArray(window.CRONOGRAMA)) return;
    const refs = {
      tabs: document.getElementById("cronograma-tabs"),
      lista: lista,
      vazio: document.getElementById("cronograma-vazio")
    };
    // Começa no dia atual do evento, se estiver rolando; senão, no primeiro dia.
    let inicio = 0;
    const hoje = new Date();
    window.CRONOGRAMA.forEach((d, i) => {
      const m = /(\d{2})\/(\d{2})/.exec(d.data || "");
      if (m && hoje.getDate() === +m[1] && (hoje.getMonth() + 1) === +m[2]) inicio = i;
    });
    render(inicio, refs);
  });
})();
