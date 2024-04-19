'use client';
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

const FreeTrialTC = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
      <p className='inline-flex justify-center items-center border-b border-yellow-400 cursor-pointer text-sm px-2' onClick={() => setOpenModal(true)}>
        <svg class="w-5 h-5 mr-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"/>
        </svg>
            Terms and Conditions of Free Trial</p>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>14-Day Free Trial with Klaviyo & Shopify Theme
</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <span className='block text-lg text-black'>Included Services:</span>
            Klaviyo Email Marketing: Access to Klaviyo&apos;s free plan for creating and sending two (2) email campaigns during the Trial.
            <br />
            Free Shopify Theme: One (1) pre-selected, high-converting Shopify theme will be installed on your store.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <span className='block text-lg text-black'>Post-Trial:</span>
                After the Trial ends, you will need to upgrade your email marketing plan to continue using the service.
                The free Shopify theme will remain installed on your store unless you choose to remove it.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
};

export default FreeTrialTC;