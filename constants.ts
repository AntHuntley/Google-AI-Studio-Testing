
import { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'QuantumLeap Text Summarizer',
    description: 'An advanced text summarization tool using a custom-trained transformer model to generate concise and coherent summaries of long articles.',
    imageUrl: 'https://picsum.photos/seed/quantum/600/400',
    tags: ['NLP', 'Text Summarization', 'Gemini Pro'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://google.com'
  },
  {
    id: 2,
    title: 'Artisan AI Image Generator',
    description: 'A generative adversarial network (GAN) that creates unique, high-resolution artistic images from textual prompts, trained on a diverse dataset.',
    imageUrl: 'https://picsum.photos/seed/artisan/600/400',
    tags: ['Image Generation', 'GAN', 'Imagen 4'],
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'CodeGenius: AI-Powered Dev Tool',
    description: 'A VS Code extension that provides intelligent code suggestions, bug detection, and automated refactoring using a fine-tuned Gemini model.',
    imageUrl: 'https://picsum.photos/seed/codegenius/600/400',
    tags: ['Code Generation', 'Developer Tools', 'Gemini 2.5 Pro'],
    liveUrl: 'https://google.com'
  },
  {
    id: 4,
    title: 'StoryWeaver Narrative Engine',
    description: 'A dynamic storytelling AI that generates branching narratives for interactive fiction and games, adapting to player choices in real-time.',
    imageUrl: 'https://picsum.photos/seed/story/600/400',
    tags: ['Creative Writing', 'NLP', 'Gemini Flash'],
    githubUrl: 'https://github.com',
  },
  {
    id: 5,
    title: 'EchoWave Voice Synthesis',
    description: 'A text-to-speech (TTS) system with highly realistic and expressive voice generation, capable of cloning voices from short audio samples.',
    imageUrl: 'https://picsum.photos/seed/echo/600/400',
    tags: ['Audio Generation', 'TTS', 'Gemini TTS'],
    liveUrl: 'https://google.com'
  },
  {
    id: 6,
    title: 'ChromaDream Video Colorizer',
    description: 'An AI tool that automatically colorizes black and white videos, leveraging temporal consistency models to ensure smooth and realistic results.',
    imageUrl: 'https://picsum.photos/seed/chroma/600/400',
    tags: ['Video Processing', 'Computer Vision', 'Veo'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://google.com'
  },
];
