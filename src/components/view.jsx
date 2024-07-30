import Header from "./header";
import Footer from "./footer";
function View() {
  return (
    <div class="max-w-screen-md mx-auto text-center">
      <Header />
      <h3> My view Section</h3>
      <p class="mb-3 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rem
        saepe suscipit facere aliquid, non, consectetur similique, ut eum sed
        mollitia autem delectus ab. Sequi recusandae quam quaerat saepe
        provident.
      </p>
      <Footer />
    </div>
  );
}

export default View;
