const Intro = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
      <div className="md: col-span-2 flex flex-col justify-center">
        <div className="card bg-base-100 shadow-sm p-6">
          <h1 className="card-title font-semibold text-3xl p-6 text-primary">
            Scott Weaver
          </h1>
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit
              amet convallis nisi. Nulla posuere, nulla vitae ultricies gravida,
              enim nisl gravida metus, at mattis odio augue quis nisl. Nulla
              vitae lacus nec turpis vestibulum eleifend vel vestibulum felis.
              Sed eu sapien eros. Sed iaculis dolor sit amet orci placerat
              fermentum. Nulla dictum tincidunt lectus non tristique. Integer
              egestas est leo, nec vehicula lacus sollicitudin vitae. Integer id
              luctus nibh. In pharetra felis a nisi tincidunt vehicula.
              Pellentesque efficitur pretium quam. Cras vehicula arcu vel lacus
              eleifend ultrices. Donec sollicitudin nulla volutpat quam auctor,
              vel egestas dui ornare. Vivamus tincidunt non metus eu ultricies.
              Maecenas mauris lectus, porttitor ut placerat eu, venenatis at
              nunc. Nunc hendrerit, ipsum in venenatis egestas, ligula quam
              commodo ipsum, ac convallis dolor nunc eu metus. Pellentesque ut
              pellentesque felis, sit amet ultrices diam. Aliquam mauris ex,
              sodales ac faucibus a, ultrices id ante. Aenean porttitor iaculis
              diam, nec dignissim arcu egestas eget. Integer convallis laoreet
              ex, at mattis lectus porta sit amet. Donec eget tortor vitae velit
              posuere aliquet. Integer ultricies feugiat elit, malesuada porta
              massa vulputate nec. Sed vel nunc congue, condimentum felis vitae,
              pellentesque erat. Mauris quis pharetra libero. Vestibulum mattis,
              nulla at dignissim aliquet, orci sem mollis arcu, in elementum ex
              nulla vel eros. Cras id pulvinar est. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <ul className="list-disc mt-2">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Vivamus vestibulum dolor ac vestibulum tincidunt.</li>
              <li>
                Aenean sit amet enim elementum, accumsan erat a, fringilla
                tortor.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid-cols-1 object-cover">
        <img
          src="/assets/monk.png"
          className="invisible md:visible z-20 max-w-sm"
          alt="monk"
        />
      </div>
    </section>
  );
};

export default Intro;
