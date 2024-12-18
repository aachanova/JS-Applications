import { html, render } from "../lib.js";

const temp = () => html`
<!-- Dashboard page -->
<h3 class="heading">Our Cars</h3>
<section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    <div class="car">
        <img src="./images/pagani.jpg" alt="example1" />
        <h3 class="model">Pagani Huayra</h3>
        <div class="specs">
            <p class="price">Price: €1,010,310</p>
            <p class="weight">Weight: 1350 kg</p>
            <p class="top-speed">Top Speed: 360 kph</p>
        </div>
        <a class="details-btn" href="#">More Info</a>
    </div>
    <div class="car">
        <img src="./images/martin.png" alt="example1" />
        <h3 class="model">Aston Martin One-77</h3>
        <div class="specs">
            <p class="price">Price: €2,960,000</p>
            <p class="weight">Weight: 1500 kg</p>
            <p class="top-speed">Top Speed: 355 kph</p>
        </div>
        <a class="details-btn" href="#">More Info</a>
    </div>
    <div class="car">
        <img src="./images/ferrari.png" alt="example1" />
        <h3 class="model">Ferrari LaFerrari</h3>
        <div class="specs">
            <p class="price">Price: €3,210,000</p>
            <p class="weight">Weight: 1600 kg</p>
            <p class="top-speed">Top Speed: 355 kph</p>
        </div>
        <a class="details-btn" href="#">More Info</a>
    </div>
</section>
<!-- Display an h2 if there are no posts -->
<h3 class="nothing">Nothing to see yet</h3>
`;

export function dashboardView() {
    render(temp());
}