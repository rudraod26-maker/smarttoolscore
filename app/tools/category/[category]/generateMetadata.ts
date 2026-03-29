import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const category = params.category.replace(/-/g, " ");

  return {
    title: `${category} Tools | Free Online Tools`,
    description: `Explore the best ${category} tools online. Free, fast and easy to use tools for productivity and automation.`,
  };
}