export declare enum IRQ {
    TIMER_0 = 0,
    TIMER_1 = 1,
    TIMER_2 = 2,
    TIMER_3 = 3,
    PWM_WRAP = 4,
    USBCTRL = 5,
    XIP = 6,
    PIO0_IRQ0 = 7,
    PIO0_IRQ1 = 8,
    PIO1_IRQ0 = 9,
    PIO1_IRQ1 = 10,
    DMA_IRQ0 = 11,
    DMA_IRQ1 = 12,
    IO_BANK0 = 13,
    IO_QSPI = 14,
    SIO_PROC0 = 15,
    SIO_PROC1 = 16,
    CLOCKS = 17,
    SPI0 = 18,
    SPI1 = 19,
    UART0 = 20,
    UART1 = 21,
    ADC_FIFO = 22,
    I2C0 = 23,
    I2C1 = 24,
    RTC = 25
}
export declare const MAX_HARDWARE_IRQ = IRQ.RTC;
