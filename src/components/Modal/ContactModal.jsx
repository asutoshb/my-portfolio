import React from "react";
import Button from "react-bootstrap/Button";
import Fade from "@mui/material/Fade";
import { Modal, styled } from "@mui/material";
import { useForm } from "@formcarry/react";
import "./modalc.css";

// Create a styled component using @mui/material's styled function
const ModalPaper = styled('div')(({ theme }) => ({
  border: "2px solid purple",
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
  backgroundColor: "#191227",
  textAlign: "center",
}));

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { state, submit } = useForm({
    id: "lNcF77RzH4K",
  });

  if (state.submitted) {
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form onSubmit={submit}>
            <ModalPaper>
              <div style={{ color: "red" }}>
                Thank you! We received your submission.
              </div>
            </ModalPaper>
          </form>
        </Fade>
      </Modal>
    );
  }

  return (
    <div>
      <Button
        variant="primary"
        target="_blank"
        data-aos="fade-down"
        onClick={handleOpen}
        style={{ marginTop: "-20px" }}
      >
        Click To Send Message
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form onSubmit={submit}>
            <ModalPaper>
              <h2 id="transition-modal-title" style={{ color: "white" }}>
                Send Message
              </h2>
              <div>
                <input
                  type="text"
                  placeholder="Write Your Name"
                  className="input-nilp"
                  required
                />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Write Your Email"
                  className="input-nilp"
                  required
                />
                <textarea
                  id="message"
                  placeholder="Write here..."
                  name="message"
                  className="input-nilp2"
                  required
                />
                <br /> <br />
                <Button type="submit" style={{ width: "60%" }}>
                  SUBMIT
                </Button>
              </div>
            </ModalPaper>
          </form>
        </Fade>
      </Modal>
    </div>
  );
}
