import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Intro = () => {
  const arr = [
    `Hey There this is Aman Tripathi an enthusiast learner and explorer passionate about learning the new things entirely faster
`,
  ];
  return (
    <div className="flex flex-row gap-8 justify-center mt-16 ">
      <div className="w-[50%] border p-4 bg-gradient-to-r from-black via-yellow-200 to-black" style={{
    background: 'linear-gradient(135deg, #1E1E1E, #2B2B2B)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
  }}>
      <h1>
        <pre>{`<!DOCTYPE html>\n<html lang="en"> \n<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width ">
    <title>IntroDuction</title>
</head>`}</pre>
<pre className="text-red-600 font-semibold text-xl font-serif">{`<body>`}</pre>
        <span className="text-green-500 text-2xl font-bold font-serif">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={arr}
            loop={5}
            style={{
                whiteSpace: "pre-line",
                display: "block",
              }}
            cursor
            cursorStyle='#'
            typeSpeed={70}
            deleteSpeed={100}
            delaySpeed={1000}
            omitDeletionAnimation={true}
          />
        </span>
      </h1>

      <pre className="text-red-600 font-semibold text-xl font-serif">{`</body>`}</pre>
    {`</html>`}
      </div>
      <div className="max-w-[50%]">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/143320559?v=4"></AvatarImage>
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Intro;
