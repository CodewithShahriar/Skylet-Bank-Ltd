import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "5 Tips to Improve Your Credit Score in 2025",
      excerpt: "Learn effective strategies to boost your credit score and improve your financial health.",
      category: "Financial Tips",
      date: "May 8, 2023",
      readTime: "5 min read",
      image: "https://www.rbcroyalbank.com/en-ca/wp-content/uploads/sites/12/2023/09/Untitled-design-2023-07-10T165109.348.jpg?quality=80"
    },
    {
      title: "Understanding the Benefits of Fixed Deposits",
      excerpt: "Explore how fixed deposits can provide stable returns and security for your savings.",
      category: "Investment",
      date: "Apr 22, 2023",
      readTime: "4 min read",
      image: "https://wpblogassets.paytm.com/paytmblog/uploads/2024/03/Blog_Generic_Income-Tax-Exemptions-on-Fixed-Deposits-2025.jpg"
    },
    {
      title: "How to Secure Your Online Banking Transactions",
      excerpt: "Essential security practices every user should follow to protect their online banking accounts.",
      category: "Security",
      date: "Apr 15, 2023",
      readTime: "6 min read",
      image: "https://framerusercontent.com/images/KuVEHoVEU0JHANmh6Wzt8ss3rQ.jpg"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-bank-primary">Latest From Blog</h2>
          <Button variant="outline" className="border-bank-primary text-bank-primary hover:bg-bank-primary/5">
            View All Posts <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogPostCard = ({ post }: { post: any }) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full card-hover">
      <div className="aspect-video bg-gray-100">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6 flex-grow">
        <div className="flex items-center text-xs text-gray-500 mb-2 space-x-4">
          <span>{post.category}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
        <h3 className="font-bold text-xl mb-2 text-bank-primary">{post.title}</h3>
        <p className="text-gray-600 mb-2">{post.excerpt}</p>
        <span className="text-xs text-gray-500">{post.readTime}</span>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="ghost" className="text-bank-primary hover:text-bank-primary/80 p-0">
          Read Article <ArrowRight size={16} className="ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogSection;
