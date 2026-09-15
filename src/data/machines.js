// Catalog dataset for G.W AGRO
// Easily editable for adding new machines in the future

export const MACHINES = [
  {
    id: "maquina-1",
    title: "Trator John Deere 6130J MFWD",
    brand: "John Deere",
    model: "6130J",
    category: "Tratores",
    year: "2021",
    hours: "1.850 h",
    location: "Cambé - PR",
    price: "Consulte condições",
    mainImage: "/images/maquina-1.jpg",
    images: [
      "/images/maquina-1.jpg"
    ],
    featured: true,
    status: "Disponível",
    highlights: [
      "130 cv de potência",
      "Cabinado com Ar-Condicionado",
      "Transmissão 16x16 PowrQuad",
      "Tração 4x4 MFWD"
    ],
    description: "Trator John Deere 6130J em excelente estado de conservação, localizado na G.W AGRO em Cambé/PR. Equipamento trabalhado com manutenção e revisões rigorosamente em dia. Oferece alta produtividade, economia de combustível e máximo conforto ao operador. Ideal para preparo de solo, plantio e operações com implementos diversos.",
    specs: {
      "Marca": "John Deere",
      "Modelo": "6130J",
      "Ano": "2021",
      "Horas de uso": "1.850 h",
      "Potência": "130 cv",
      "Transmissão": "16x16 PowrQuad",
      "Tração": "4x4 MFWD",
      "Cabine": "Original com Ar-Condicionado",
      "Localização": "Cambé - PR"
    }
  },
  {
    id: "maquina-2",
    title: "Colheitadeira Case IH Axial-Flow 7120",
    brand: "Case IH",
    model: "Axial-Flow 7120",
    category: "Colheitadeiras",
    year: "2018",
    hours: "Consulte",
    location: "Cambé - PR",
    price: "Consulte condições",
    mainImage: "/images/maquina-2.jpg",
    images: [
      "/images/maquina-2.jpg"
    ],
    featured: true,
    status: "Disponível",
    highlights: [
      "Sistema de Trilha Axial-Flow",
      "Plataforma Draper 35 Pés",
      "Piloto Automático Integrado",
      "Monitor de Produtividade"
    ],
    description: "Colheitadeira Case IH Axial-Flow 7120 disponível para negociação na G.W AGRO em Cambé/PR. Equipamento de alta capacidade operacional para colheita de grãos, garantindo baixíssimo índice de perdas, excelente integridade de grãos e alto rendimento diário na lavoura.",
    specs: {
      "Marca": "Case IH",
      "Modelo": "Axial-Flow 7120",
      "Ano": "2018",
      "Horas de motor": "Consulte",
      "Horas de trilha": "Consulte",
      "Sistema de Trilha": "Rotor Axial-Flow",
      "Plataforma": "Draper 35 pés",
      "Tecnologia": "Piloto Automático & GPS",
      "Localização": "Cambé - PR"
    }
  },
  {
    id: "maquina-3",
    title: "Pulverizador Autopropelido Jacto Uniport 3030",
    brand: "Jacto",
    model: "Uniport 3030",
    category: "Pulverizadores",
    year: "Consulte",
    hours: "Consulte",
    location: "Cambé - PR",
    price: "Consulte condições",
    mainImage: "/images/maquina-3.jpg",
    images: [
      "/images/maquina-3.jpg"
    ],
    featured: true,
    status: "Disponível",
    highlights: [
      "Barras de 36 Metros",
      "Reservatório de 3.000 Litros",
      "Desligamento Bico a Bico",
      "Transmissão 4x4 Hidrostática"
    ],
    description: "Pulverizador Autopropelido Jacto Uniport 3030 disponível na G.W AGRO em Cambé/PR. Reconhecido pela máxima precisão de aplicação, grande rendimento operacional diário e menor compactação de solo. Equipamento selecionado e pronto para a safra.",
    specs: {
      "Marca": "Jacto",
      "Modelo": "Uniport 3030",
      "Ano": "Consulte",
      "Horas": "Consulte",
      "Reservatório": "3.000 Litros",
      "Tamanho de Barras": "36 Metros",
      "Transmissão": "4x4 Hidrostática Inteligente",
      "Localização": "Cambé - PR"
    }
  }
];

export const CATEGORIES = [
  "Todos",
  "Tratores",
  "Colheitadeiras",
  "Plantadeiras",
  "Pulverizadores",
  "Implementos",
  "Outros"
];

export const CONTACT_INFO = {
  company: "G.W AGRO",
  tagline: "Máquinas e Implementos Agrícolas",
  city: "Cambé",
  state: "PR",
  address: "Cambé - PR",
  phoneDisplay: "(43) 9822-5104",
  phoneRaw: "554398225104",
  instagram: "@g.w_agro",
  instagramUrl: "https://instagram.com/g.w_agro",
  whatsappBaseUrl: "https://wa.me/554398225104"
};

export const LEASING_OPPORTUNITIES = [
  {
    id: "lease-1",
    title: "Área Agrícola para Arrendamento - Região de Cambé / Londrina",
    hectares: "Consulte",
    aptitude: "Grãos (Soja / Milho)",
    location: "Cambé e Região - PR",
    description: "Excelente oportunidade de arrendamento de terra estruturada com boa logística e aptidão agrícola comprovada na região norte do Paraná.",
    status: "Oportunidade Ativa"
  }
];
