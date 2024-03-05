import { Banner, Footer, Header, VideoPlayer } from "./components";
import "./styles.scss";

export default function Home() {
  return (
    <main>
      <Header />
      <VideoPlayer />
      <div className="section-title" id="gifting">
        <h2>Gifting</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <section className="border-orange">
        <Banner
          imagePath="/assets/banner-1.png"
          title="Toys perfect for birthday gift-giving season in Spring"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        />
        <Banner
          imagePath="/assets/banner-2.png"
          title="Gifts for Mom"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
          left
        />
      </section>
      <div className="section-title" id="travel">
        <h2>Travel</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <section className="border-green">
        <Banner
          imagePath="/assets/banner-3.png"
          title="Travel the world no matter where you are. No Passport needed."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        />
        <Banner
          imagePath="/assets/banner-4.png"
          title="Fun accessories to take with you on your travels or keep kids entertained"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
          left
        />
      </section>
      <div className="section-title" id="adults">
        <h2>Adults welcome</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <section className="border-blue">
        <Banner
          imagePath="/assets/banner-5.png"
          title="For the Kids at Heart who love to unplug, unbox and unwind"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        />
      </section>
      <div className="section-title" id="art">
        <h2>Art & Home Décor</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <section className="border-light-grey">
        <Banner
          imagePath="/assets/banner-6.png"
          title="Playful ideas for refreshing your space while tapping into your more creative side"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
          left
        />
      </section>
      <div className="section-title" id="space">
        <h2>Space</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <section className="border-black">
        <Banner
          imagePath="/assets/banner-7.png"
          title="Capture the wonders of space and exploration"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        />
      </section>
      <div className="section-title" id="pop">
        <h2>Pop Culture</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <section className="border-pink">
        <Banner
          imagePath="/assets/banner-8.png"
          title="Recreate scenes from your favorite movies and TV series"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
          left
        />
      </section>
      <div className="section-title" id="toddlers">
        <h2>Toddlers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <section className="border-yellow">
        <Banner
          imagePath="/assets/banner-9.png"
          title="Waterproof toys for toddlers and beyond"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        />
        <Banner
          imagePath="/assets/banner-10.png"
          title="xx TBD"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
          left
        />
      </section>
      <div className="section-title" id="playing">
        <h2>Real World Role Playing</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <section className="border-red">
        <Banner
          imagePath="/assets/banner-11.png"
          title="Celebrating the everyday heroes"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        />
        <Banner
          imagePath="/assets/banner-12.png"
          title="xxxxx TBD"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
          left
        />
      </section>
      <Footer />
    </main>
  );
}
