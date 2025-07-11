 /* eslint-disable */
// app/blog/[slug]/page.jsx
import Link from 'next/link'
import { FiCalendar, FiClock, FiTag, FiArrowLeft } from 'react-icons/fi'
import { notFound } from 'next/navigation'
import SyntaxHighlighter from '../../components/SyntaxHighlighter'


const blogPosts = [
  {
    id: 1,
    title: "Mastering React Hooks in 2023",
    slug: "mastering-react-hooks",
    date: "June 15, 2023",
    readTime: "8 min read",
    category: "Frontend",
    image: "/images/download.png",
    content: [
      { type: 'heading', level: 2, text: 'Introduction to Modern React' },
      { type: 'paragraph', text: 'React Hooks have fundamentally changed how we write components, making them more concise and easier to reason about. In this post, we\'ll explore advanced patterns that will elevate your React skills.' },
      
      { type: 'heading', level: 3, text: 'The Power of useState' },
      { type: 'paragraph', text: 'The useState hook is your gateway to state management in functional components:' },
      { 
        type: 'code', 
        language: 'javascript',
        code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`
      },

      { type: 'heading', level: 3, text: 'useEffect Deep Dive' },
      { type: 'paragraph', text: 'Side effects are handled gracefully with useEffect:' },
      { 
        type: 'code', 
        language: 'javascript',
        code: `useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    // Cleanup subscription
    subscription.unsubscribe();
  };
}, [props.source]);`
      },

      { type: 'heading', level: 2, text: 'Advanced Patterns' },
      { type: 'paragraph', text: 'Custom hooks let you extract component logic into reusable functions:' },
      { 
        type: 'code', 
        language: 'javascript',
        code: `function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}`
      }
    ]
  },
  {
    id: 2,
    title: "The Power of Next.js Static Generation",
    slug: "nextjs-static-generation",
    date: "July 2, 2023",
    readTime: "10 min read",
    category: "Next.js",
    image: "/images/download.jpg",
    content: [
      { type: 'heading', level: 2, text: 'Why Static Generation Matters' },
      { type: 'paragraph', text: 'Next.js static generation (SSG) delivers incredible performance benefits. Here\'s how we implemented it on a high-traffic e-commerce site.' },
      
      { type: 'heading', level: 3, text: 'Basic SSG Implementation' },
      { type: 'paragraph', text: 'Using getStaticProps for data fetching:' },
      { 
        type: 'code', 
        language: 'javascript',
        code: `export async function getStaticProps() {
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();

  return {
    props: { products },
    revalidate: 60 // Regenerate every 60 seconds
  };
}`
      },

      { type: 'heading', level: 3, text: 'Dynamic Routes with SSG' },
      { type: 'paragraph', text: 'Combine with getStaticPaths for dynamic pages:' },
      { 
        type: 'code', 
        language: 'javascript',
        code: `export async function getStaticPaths() {
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: 'blocking' };
}`
      },

      { type: 'heading', level: 2, text: 'Performance Results' },
      { type: 'paragraph', text: 'Our implementation resulted in:' },
      { 
        type: 'list',
        items: [
          '⚡ 92% faster page loads',
          '📈 40% improvement in SEO rankings',
          '💰 25% increase in conversion rate'
        ]
      }
    ]
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Each",
    slug: "css-grid-vs-flexbox",
    date: "August 10, 2023",
    readTime: "6 min read",
    category: "CSS",
    image: "/images/css vs flexbox.png",
    content: [
      { type: 'heading', level: 2, text: 'The Great Layout Debate' },
      { type: 'paragraph', text: 'Both CSS Grid and Flexbox are powerful layout tools, but they serve different purposes. Here\'s when to use each.' },
      
      { type: 'heading', level: 3, text: 'Flexbox Use Cases' },
      { type: 'paragraph', text: 'Flexbox excels at one-dimensional layouts. Perfect for:' },
      { 
        type: 'list',
        items: [
          'Navigation bars',
          'Centering elements vertically and horizontally',
          'Distributing space along a single axis'
        ]
      },
      { 
        type: 'code', 
        language: 'css',
        code: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}`
      },

      { type: 'heading', level: 3, text: 'CSS Grid Use Cases' },
      { type: 'paragraph', text: 'Grid is ideal for two-dimensional layouts. Best for:' },
      { 
        type: 'list',
        items: [
          'Entire page layouts',
          'Complex card grids',
          'Precise item placement'
        ]
      },
      { 
        type: 'code', 
        language: 'css',
        code: `.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 80px 1fr;
  min-height: 100vh;
}`
      },

      { type: 'heading', level: 2, text: 'Combining Both' },
      { type: 'paragraph', text: 'The real power comes when you combine them:' },
      { 
        type: 'code', 
        language: 'css',
        code: `.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  display: flex;
  flex-direction: column;
}`
      }
    ]
  }
]

export default function BlogPost({ params }) {
  const post = blogPosts.find(post => post.slug === params.slug)
  
  if (!post) return notFound()

  const renderContent = () => {
    return post.content.map((item, index) => {
      switch (item.type) {
        case 'heading':
          const HeadingTag = `h${item.level}`;
          return <HeadingTag key={index} className={`text-${item.level === 2 ? '3xl' : '2xl'} font-bold mt-8 mb-4`}>{item.text}</HeadingTag>;
        case 'paragraph':
          return <p key={index} className="mb-6 text-lg leading-relaxed">{item.text}</p>;
        case 'code':
          return (
            <div key={index} className="my-6">
              <SyntaxHighlighter language={item.language}>
                {item.code}
              </SyntaxHighlighter>
            </div>
          );
        case 'list':
          return (
            <ul key={index} className="mb-6 list-disc pl-6 space-y-2">
              {item.items.map((listItem, i) => (
                <li key={i} className="text-lg">{listItem}</li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    });
  };

  return (
    <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <div className="mb-6">
          <Link
            href="/#blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-500 transition-colors"
          >
            <FiArrowLeft className="mr-2" /> 
            <span>Back to Blog</span>
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 mb-6">
          <span className="flex items-center gap-2">
            <FiCalendar className="text-blue-500" />
            {post.date}
          </span>
          <span className="flex items-center gap-2">
            <FiClock className="text-blue-500" />
            {post.readTime}
          </span>
          <span className="flex items-center gap-2">
            <FiTag className="text-blue-500" />
            {post.category}
          </span>
        </div>
        
        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="prose dark:prose-invert max-w-none">
        {renderContent()}
      </div>
    </article>
  )
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug
  }))
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find(post => post.slug === params.slug)
  
  return {
    title: `${post.title} | My Blog`,
    description: post.content.find(item => item.type === 'paragraph')?.text || '',
    openGraph: {
      images: [post.image]
    }
  }
}
