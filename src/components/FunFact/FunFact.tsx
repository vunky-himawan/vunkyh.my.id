import Heading from "../Heading";

const FunFact = () => {
  return (
    <>
      <section>
        <div className="py-10">
          <Heading title="Fun Fact" customStyles="text-center"></Heading>
          <div className="flex justify-center items-center relative">
            <div className="i-streamline-emojis:grinning-face-with-sweat animate-[shake_5s_ease-in-out_infinite] absolute text-3xl -top-10 left-5 -rotate-12" />
            <p className="text-center break-words text-3xl font-semibold text-warmGray-4 p-5">
              I am not fluent in English, I use DeepL translators to ensure
              clear communication and quality content.
            </p>
            <div className="i-streamline-emojis:face-with-tears-of-joy animate-[shake2_5s_ease-in-out_infinite] absolute text-5xl -bottom-9 right-5 rotate-12" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FunFact;
