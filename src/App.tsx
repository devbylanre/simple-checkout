import React, { useState } from 'react';
import Styles from './app.module.css';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const products = [
    {
      name: 'Akpabio Sofa',
      image: {
        src: 'https://taeillo.com/cdn/shop/files/akpabio-sofas-39950899511518_1080x1080.jpg?v=1698160017',
        alt: 'akpabio-sofas-taeillo',
      },
      amount: 1,
      price: 251.61,
    },
    {
      name: 'Achi Table',
      image: {
        src: 'https://taeillo.com/cdn/shop/files/achi-tables-39869898555614_1080x1080.jpg?v=1696602841',
        alt: 'achi-tables-taeillo',
      },
      amount: 1,
      price: 45.29,
    },
    {
      name: 'Tunao Sofa',
      image: {
        src: 'https://taeillo.com/cdn/shop/files/tunao-sofa-sofas-39881206759646_1080x1080.jpg?v=1696863119',
        alt: 'tunao-sofas-taeillo',
      },
      amount: 1,
      price: 125.82,
    },
  ];

  const splitPrice = (price: number): string[] => {
    const inStr = String(price);
    const splitStr = inStr.split('.');
    const realNumber = splitStr[0];
    const floatNumber = splitStr[1];

    return [realNumber, floatNumber];
  };

  return (
    <main className={Styles.mains}>
      <div className={Styles.container}>
        <div className={Styles.box}>
          <motion.div
            className={Styles.items}
            animate={{
              top: isOpen ? [0, -40, -56, -224] : [0],
              width: isOpen ? [0, 20, 40, 320] : [0],
              height: isOpen ? [0, 20, 40, 200] : [0],
              borderRadius: isOpen ? [0, 50, 20] : [0],
            }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              {isOpen && (
                <React.Fragment>
                  {products.map((product, index) => {
                    return (
                      <motion.div
                        key={product.name}
                        className={Styles.item}
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className={Styles.itemContent}
                          transition={{
                            delay: 0.8 + index * 0.5,
                            duration: 0.5,
                          }}
                        >
                          <h3 className={Styles.itemName}>
                            {product.name}
                            <span className={Styles.itemAmount}>
                              x{product.amount}
                            </span>
                          </h3>
                          <p className={Styles.itemPrice}>
                            <span>{splitPrice(product.price)[0]}</span>.
                            <span>{splitPrice(product.price)[1]}</span>
                            <span> USD</span>
                          </p>
                        </motion.div>

                        <motion.img
                          loading={'lazy'}
                          src={product.image.src}
                          alt={product.image.alt}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.5 }}
                          style={{ transformOrigin: 'center' }}
                        />
                      </motion.div>
                    );
                  })}
                </React.Fragment>
              )}
            </AnimatePresence>
          </motion.div>
          <button
            onMouseOver={() => setIsOpen(true)}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className={Styles.btn}
          >
            Checkout
            <span className={Styles.btnIcon}>
              <motion.span
                initial={{ y: 0, opacity: 1 }}
                animate={{
                  y: isOpen ? -8 : 0,
                  opacity: isOpen ? 0 : 1,
                }}
              >
                3
              </motion.span>

              <motion.svg
                initial={{ x: 0 }}
                animate={{ x: isOpen ? [0, -3, 3, -3, 3, -3, 3, 0] : 0 }}
                transition={{ delay: 2.5 }}
                stroke='currentColor'
                fill='none'
                stroke-width='2'
                viewBox='0 0 24 24'
                stroke-linecap='round'
                stroke-linejoin='round'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'></path>
                <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'></path>
                <path d='M17 17h-11v-14h-2'></path>
                <path d='M6 5l14 1l-1 7h-13'></path>
              </motion.svg>
            </span>
          </button>
        </div>
      </div>

      <div className={Styles.note}>
        <span>
          All products displayed are products from{' '}
          <a
            href='https://taeillo.com/'
            target='_blank'
            rel='noreferrer'
          >
            Taeillo
          </a>{' '}
          store and the price of each are displayed in USD
        </span>
      </div>
    </main>
  );
}

export default App;
