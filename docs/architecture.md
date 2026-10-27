# Arquitetura do NexTerra

NexTerra é um app Expo Router com três abas: Desktop, Jogos e Configurações. O assistente `/setup` funciona como uma rota modal para manter o fluxo claro e reversível.

O estado de idioma, perfil e assistente vive em `NexTerraProvider`, sem banco adicional. Isso mantém o protótipo leve e evita criar dependências de sincronização antes de existir autenticação ou perfis por usuário.

O diagnóstico atual lê apenas campos expostos pelo Expo e pelo sistema operacional. CPU, GPU e RAM aparecem como pendentes quando não há API nativa confiável. O caminho correto é preencher esses campos pelo módulo `NexTerraNative`, não estimar hardware pelo nome do aparelho.

Os perfis são recomendações transparentes. Eles ainda não alteram governor, clock, temperatura ou kernel — ações que exigem permissões especiais e podem danificar o aparelho. A UI comunica intenção e impacto; a aplicação de parâmetros reais ficará limitada ao que o Android permite sem root.

A direção visual usa azul-noite, ciano e violeta. O CSS/NativeWind do starter permanece disponível, mas os componentes principais usam `StyleSheet` para controlar melhor o resultado em Android, Web Preview e telas estreitas.
