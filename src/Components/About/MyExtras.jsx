const MyExtras = () => {
  return (
    <>
      {/* Large Screens */}
      <div className="hidden lg:block">
        <div className="text-[#64ccc5] text-3xl mt-16 p-4">Research Publication</div>
        <p className="text-white text-xl mx-8">
          <strong>Title:</strong> Edge AI-based Sound Surveillance and Alert Recognition System
        </p>
        <p className="text-white text-lg mx-8">
          Published in <em>International Journal of Information Technology (Springer)</em>, this research presents a real-time audio surveillance system using an STM32 microcontroller and lightweight AI. The system classifies critical sound events (like alarms or sirens) on edge devices without cloud reliance, ensuring privacy, low latency, and high efficiency. Achieved over 95% accuracy using a custom-trained SVM model and integrated sound-level sensing for robust detection in noisy environments.<br />
          <strong>DOI:</strong> 10.1007/s41870-025-02562-5
        </p>
        <div className="mt-4 mx-8">
          <a
            href="https://rdcu.be/el54Z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64ccc5] text-2xl hover:underline hover:underline-offset-2"
          >
            Read My Paper
          </a>
        </div>
      </div>

      {/* Medium Screens */}
      <div className="hidden md:block lg:hidden">
        <div className="text-[#64ccc5] text-4xl mt-6 p-4">Research Publication</div>
        <p className="text-white text-2xl mx-8">
          <strong>Title:</strong> Edge AI-based Sound Surveillance and Alert Recognition System
        </p>
        <p className="text-white text-xl mx-8">
          Published in <em>International Journal of Information Technology (Springer)</em>, this research presents a real-time audio surveillance system using an STM32 microcontroller and lightweight AI. The system classifies critical sound events (like alarms or sirens) on edge devices without cloud reliance, ensuring privacy, low latency, and high efficiency. Achieved over 95% accuracy using a custom-trained SVM model and integrated sound-level sensing for robust detection in noisy environments.<br />
          <strong>DOI:</strong> 10.1007/s41870-025-02562-5
        </p>
        <div className="mt-4 mx-8 mb-10">
          <a
            href="https://rdcu.be/el54Z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64ccc5] text-2xl hover:underline hover:underline-offset-2"
          >
            Read My Paper
          </a>
        </div>
      </div>

      {/* Small Screens */}
      <div className="block md:hidden">
        <div className="text-[#64ccc5] text-2xl mt-6 p-4">Research Publication</div>
        <p className="text-white text-base mx-8">
          <strong>Title:</strong> Edge AI-based Sound Surveillance and Alert Recognition System
        </p>
        <p className="text-white text-base mx-8">
          Published in <em>International Journal of Information Technology (Springer)</em>, this research presents a real-time audio surveillance system using an STM32 microcontroller and lightweight AI. The system classifies critical sound events (like alarms or sirens) on edge devices without cloud reliance, ensuring privacy, low latency, and high efficiency. Achieved over 95% accuracy using a custom-trained SVM model and integrated sound-level sensing for robust detection in noisy environments.<br />
          <strong>DOI:</strong> 10.1007/s41870-025-02562-5
        </p>
        <div className="mt-4 mx-8 mb-10">
          <a
            href="https://rdcu.be/el54Z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64ccc5] text-lg hover:underline hover:underline-offset-2"
          >
            Read My Paper
          </a>
        </div>
      </div>
    </>
  );
};

export default MyExtras;


// const MyExtras = () => {
//   return (
//     <>
//     <div className="hidden lg:block">
//         <div className=" text-[#64ccc5] text-3xl mt-16 p-4 ">Research Publication</div>
//       <p className="text-white text-xl mx-8">
//         Title: Edge AI-based Sound Surveillance and Alert Recognition System
//       </p>
//       <p>
//         Published in International Journal of Information Technology (Springer),
//          this research presents a real-time audio surveillance system using an STM32 
//          microcontroller and lightweight AI. The system classifies critical sound events
//           (like alarms or sirens) on edge devices without cloud reliance, ensuring privacy, 
//           low latency, and high efficiency. Achieved over 95% accuracy using a custom-trained 
//           SVM model and integrated sound-level sensing for robust detection in noisy environments.
//                   DOI: 10.1007/s41870-025-02562-5
//       </p>
//     </div>

//     <div className="hidden md:block lg:hidden">
//         <div className=" text-[#64ccc5] text-4xl mt-6 p-4 ">Research Publication</div>
//       <p className="text-white text-2xl mx-8">
//       Title: Edge AI-based Sound Surveillance and Alert Recognition System
//       </p>
//       <p className="text-white text-2xl mx-8 mb-10">
//         Published in International Journal of Information Technology (Springer),
//          this research presents a real-time audio surveillance system using an STM32 
//          microcontroller and lightweight AI. The system classifies critical sound events
//           (like alarms or sirens) on edge devices without cloud reliance, ensuring privacy, 
//           low latency, and high efficiency. Achieved over 95% accuracy using a custom-trained 
//           SVM model and integrated sound-level sensing for robust detection in noisy environments.
//                   DOI: 10.1007/s41870-025-02562-5
//       </p>
//     </div>
      
//       <div className="block md:hidden">
//         <div className=" text-[#64ccc5] text-2xl mt-6 p-4 ">Research Publication</div>
//       <p className="text-white text-base mx-8">
//        Title: Edge AI-based Sound Surveillance and Alert Recognition System
//       </p>
//       <p className="text-white text-base mx-8 mb-10">
//       Published in International Journal of Information Technology (Springer),
//          this research presents a real-time audio surveillance system using an STM32 
//          microcontroller and lightweight AI. The system classifies critical sound events
//           (like alarms or sirens) on edge devices without cloud reliance, ensuring privacy, 
//           low latency, and high efficiency. Achieved over 95% accuracy using a custom-trained 
//           SVM model and integrated sound-level sensing for robust detection in noisy environments.
//                   DOI: 10.1007/s41870-025-02562-5
//       </p>
//     </div>
//     </>
//   );
// };

// export default MyExtras;
