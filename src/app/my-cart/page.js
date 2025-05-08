import CartSectionComponent from '@/components/organisms/CartSection';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';

export default function MyCart() {
  return (
    <main className='bg-[#f8f8f8]'>
      <Navbar />
      <div className='pt-20'>
        <CartSectionComponent />
      </div>
      <Footer />
    </main>
  );
}
