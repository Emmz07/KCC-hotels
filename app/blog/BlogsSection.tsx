import { AnimateIn } from '@/components/ui/animations';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageSrc: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Destinations for Summer 2025',
    excerpt: 'Discover the most breathtaking places to visit this summer, from tropical paradises to historical cities.',
    date: 'May 15, 2025',
    author: 'Emma Johnson',
    imageSrc: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg',
    category: 'Travel',
  },
  {
    id: '2',
    title: 'The Art of Culinary Excellence at KCC Hotels',
    excerpt: 'A behind-the-scenes look at our kitchens and the chefs who create magical dining experiences.',
    date: 'April 28, 2025',
    author: 'Daniel Lee',
    imageSrc: 'https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg',
    category: 'Culinary',
  },
  {
    id: '3',
    title: 'Creating the Perfect Business Event',
    excerpt: 'Expert tips for planning successful corporate meetings, conferences, and team-building retreats.',
    date: 'April 10, 2025',
    author: 'Sarah Miller',
    imageSrc: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    category: 'Business',
  },
  {
    id: '4',
    title: 'Top 10 Destinations for Summer 2025',
    excerpt: 'Discover the most breathtaking places to visit this summer, from tropical paradises to historical cities.',
    date: 'May 15, 2025',
    author: 'Emma Johnson',
    imageSrc: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg',
    category: 'Travel',
  },
  {
    id: '5',
    title: 'The Art of Culinary Excellence at KCC Hotels',
    excerpt: 'A behind-the-scenes look at our kitchens and the chefs who create magical dining experiences.',
    date: 'April 28, 2025',
    author: 'Daniel Lee',
    imageSrc: 'https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg',
    category: 'Culinary',
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20 mt-17 bg-gray-200 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Our Blog
          </h2>
          <div className="w-20 h-1 bg-lime-500 mx-auto mb-4"></div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Insights, stories, and tips from the world of luxury hospitality. Stay updated with the latest trends
            and happenings at KCC Hotels.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimateIn key={post.id} from="bottom" delay={0.1 * (index + 1)}>
              <article className="bg-background rounded-lg overflow-hidden shadow-md h-full flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-muted-foreground mb-2">
                    {post.date} • By {post.author}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{post.excerpt}</p>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}