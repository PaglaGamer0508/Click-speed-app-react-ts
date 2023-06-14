import React, { createContext, useState } from "react";

// Define the type for the context
interface ModalContextType {
  showModal: boolean;
  toggleModal: () => void;
}

// Create the context with an initial value of undefined
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// ========== Context Creation ========== //

// Define the props for the ModalProvider component
interface ModalProviderProps {
  children: React.ReactNode;
}

// Create the ModalProvider component
const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  // ========== State Management ========== //

  // Use state to manage the showModal value
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the showModal value
  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  // ========== Context Value ========== //

  // Create the context value object
  const modalContextValue: ModalContextType = {
    showModal,
    toggleModal,
  };

  // ========== Render ========== //

  // Render the provider with the context value
  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
};

// Export the ModalProvider and ModalContext
export { ModalProvider, ModalContext };
