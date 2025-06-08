const Map = () => {
  return (
    <section >
      <div className="w-full  h-60 rounded-lg overflow-hidde">
        <iframe className="rounded-xl"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12558.916441027193!2d13.358077459200814!3d38.09996875047986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319e5836e98d27b%3A0xd222d53644197c07!2zR3VhZGFnbmEsIDkwMTI0INCf0LDQu9C10YDQvNC-!5e0!3m2!1sru!2sit!4v1747926595267!5m2!1sru!2sit"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;


