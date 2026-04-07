import {
  Database,
  MessageSquare,
  User,
  Search,
  RefreshCw,
  BarChart2,
} from "lucide-react";

export const animesFeatures = [
  {
    id: 1,
    title: "Exploração da Biblioteca",
    description: "Descubra e navegue pela vasta coleção de animes.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Sincronização de Metadados",
    description: "Contribua e atualize detalhes de animes.",
    icon: <RefreshCw className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Análises Sazonais",
    description: "Acompanhe tendências e popularidade por temporada.",
    icon: <BarChart2 className="w-6 h-6" />,
  },
];

export const projectFunctions = [
  {
    id: 1,
    icon: <Database className="w-6 h-6" />,
    title: "Biblioteca de Animes",
    description: "Acesse o repositório de informações de animes.",
    href: "#",
  },
  {
    id: 2,
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Fórum de Discussão",
    description: "Participe de discussões na comunidade.",
    href: "#",
  },
  {
    id: 3,
    icon: <User className="w-6 h-6" />,
    title: "Hub de Membros",
    description: "Gerencie seu perfil e configurações.",
    href: "#",
  },
];
