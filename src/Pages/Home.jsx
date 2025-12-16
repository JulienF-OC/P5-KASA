import Banner from "../Components/Common/Banner";
import homeImage from "../assets/images/home-banner.jpg";

function Home() {
  return (
    <div>
      <Banner image={homeImage} text="Chez vous, partout et ailleurs" />
    </div>
  );
}
