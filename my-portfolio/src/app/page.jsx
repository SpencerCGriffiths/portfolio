import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import MainBody from "@/components/MainContent/MainBody";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <Header /> 
    <Hero />
    <MainBody />
    </div>
  );
}
