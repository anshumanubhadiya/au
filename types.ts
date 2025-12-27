export interface Project {
  id: number;
  title: string;
  category: 'Residential' | 'Commercial' | 'Renovation';
  image: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  icon: string;
  description: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
