# 📦 How to Export SpeakerCard to Another Project

Follow these steps to use the SpeakerCard component in a different React project.

## Quick Export Guide

### Step 1: Copy the Component File

Copy this single file to your target project:
```
src/components/SpeakerCard.tsx
```

Place it in your project's components folder (e.g., `your-project/src/components/`).

**That's the only file you need!** The component is fully self-contained with:
- ✅ All animations built-in (no external animation libraries)
- ✅ Icons inlined (no icon library needed)
- ✅ Image fallback included
- ✅ TypeScript types included

### Step 2: Ensure Dependencies

Your target project needs:

1. **React 18+**
   ```json
   "react": "^18.0.0",
   "react-dom": "^18.0.0"
   ```

2. **Tailwind CSS**
   
   Install if needed:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

   Configure `tailwind.config.js`:
   ```js
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

   Add to your CSS:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Step 3: Use the Component

Import and use in your React app:

```tsx
import { SpeakerCard } from './components/SpeakerCard';

function App() {
  return (
    <div className="p-8">
      <SpeakerCard
        image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
        name="Sarah Anderson"
        position="Chief Technology Officer"
        company="InnovateTech Solutions"
        country="United States"
        onViewProfile={() => console.log('Profile clicked!')}
      />
    </div>
  );
}
```

## 🎯 That's It!

The component is now ready to use in your project. It's completely self-contained with:
- ✅ Image fallback built-in
- ✅ Icons inlined (no lucide-react needed)
- ✅ All animations included
- ✅ TypeScript types included

## 🔧 Customization

Once imported, you can customize:

1. **Colors**: Edit Tailwind classes in `SpeakerCard.tsx`
2. **Animations**: Adjust timing in the `<style>` tag
3. **Size**: Change `w-72` class to adjust width
4. **Logo**: Point to your own logo or remove it

## 💡 Pro Tips

### Multiple Cards in a Grid
```tsx
const speakers = [ /* your data */ ];

return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {speakers.map((speaker, i) => (
      <SpeakerCard key={i} {...speaker} />
    ))}
  </div>
);
```

### Custom onClick Behavior
```tsx
<SpeakerCard
  {...speaker}
  onViewProfile={() => {
    // Navigate to profile
    router.push(`/speakers/${speaker.id}`);
    
    // Or open a modal
    setSelectedSpeaker(speaker);
    setModalOpen(true);
  }}
/>
```

### Without Logo
To remove the logo completely, delete these sections from `SpeakerCard.tsx`:
- Line 3 (import statement)
- Lines 43-45 (background watermark)
- Lines 48-50 (animated logo on hover)

## 🐛 Troubleshooting

**Issue**: Styles not showing
- ✅ Make sure Tailwind CSS is properly configured
- ✅ Ensure your CSS includes `@tailwind` directives

**Issue**: Image not loading
- ✅ Check the image URL is accessible
- ✅ Component includes automatic fallback handling

**Issue**: Logo import error
- ✅ Update the logo import path to match your project structure
- ✅ Or remove logo references (see "Without Logo" above)

## 📚 Additional Resources

- See `SPEAKER_CARD_README.md` for full API documentation
- See `SpeakerCard.example.tsx` for more usage examples
- Original Figma: https://www.figma.com/design/BdphJ4U1iYenx3ImbkvpLh/Creative-Speaker-Card

---

**Need help?** All the code is well-commented and TypeScript typed for easy understanding!


