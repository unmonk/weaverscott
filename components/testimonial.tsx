const Testimonial = ({ image, name, text, date, i }) => {
  return (
    <div className={`chat ${i % 2 ? "chat-end" : "chat-start"} mb-1`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="chat-header font-bold">{name}</div>
      <div className="chat-bubble">{text}</div>
      <div className="chat-footer opacity-50">{date}</div>
    </div>
  );
};

export default Testimonial;
