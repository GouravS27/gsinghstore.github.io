import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading">Contact Page</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59645.6458928998!2d-156.49763993471964!3d20.877979815046206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7954d2dbe64dce81%3A0x10e5b166ad40c5dc!2sKahului%2C%20HI%2C%20USA!5e0!3m2!1sen!2sin!4v1701329416404!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/mbjvvpkw" method="POST" className="contact-inputs ">
          <input type="text" placeholder="username" name="username" required autoComplete="off"/>
          <input type="email" name="Email" placeholder="Email" autoComplete="off" required />
          <textarea name="Message" placeholder="Enter your message" cols="30" rows="10" required autoComplete="off" ></textarea>
          <input type="submit" value="send" />
        </form>
      </div>
    </div>
  </Wrapper>;
};

export default Contact;