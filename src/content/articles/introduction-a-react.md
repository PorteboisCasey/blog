---
title: 'Introduction à React : Créer des interfaces modernes'
date: '2025-02-08'
tags: ['react', 'frontend', 'tutoriel']
excerpt: 'Découvrez les fondamentaux de React pour construire des applications web interactives avec des composants réutilisables.'
---

## Pourquoi React ?

React est une bibliothèque JavaScript développée par Facebook pour créer des interfaces utilisateur. Ses principaux avantages :

- **Composants réutilisables**
- **DOM virtuel performant**
- **Écosystème riche**

## Premiers pas

```jsx
function Welcome() {
  const [count, setCount] = useState(0);

  return (
    <button 
      onClick={() => setCount(c => c + 1)}
      className="bg-primary text-white px-4 py-2 rounded-lg"
    >
      Compteur : {count}
    </button>
  );
}
```
