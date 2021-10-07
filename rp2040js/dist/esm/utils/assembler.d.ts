export declare function opcodeADCS(Rdn: number, Rm: number): number;
export declare function opcodeADDS1(Rd: number, Rn: number, imm3: number): number;
export declare function opcodeADDS2(Rdn: number, imm8: number): number;
export declare function opcodeADDspPlusImm(Rd: number, imm8: number): number;
export declare function opcodeADDsp2(imm: number): number;
export declare function opcodeADDSreg(Rd: number, Rn: number, Rm: number): number;
export declare function opcodeADDreg(Rdn: number, Rm: number): number;
export declare function opcodeADR(Rd: number, imm8: number): number;
export declare function opcodeANDS(Rn: number, Rm: number): number;
export declare function opcodeASRS(Rd: number, Rm: number, imm5: number): number;
export declare function opcodeASRSreg(Rdn: number, Rm: number): number;
export declare function opcodeBT1(cond: number, imm8: number): number;
export declare function opcodeBT2(imm11: number): number;
export declare function opcodeBICS(Rdn: number, Rm: number): number;
export declare function opcodeBL(imm: number): number;
export declare function opcodeBLX(Rm: number): number;
export declare function opcodeBX(Rm: number): number;
export declare function opcodeCMN(Rn: number, Rm: number): number;
export declare function opcodeCMPimm(Rn: number, Imm8: number): number;
export declare function opcodeCMPregT1(Rn: number, Rm: number): number;
export declare function opcodeCMPregT2(Rn: number, Rm: number): number;
export declare function opcodeDMBSY(): number;
export declare function opcodeDSBSY(): number;
export declare function opcodeEORS(Rdn: number, Rm: number): number;
export declare function opcodeISBSY(): number;
export declare function opcodeLDMIA(Rn: number, registers: number): number;
export declare function opcodeLDRreg(Rt: number, Rn: number, Rm: number): number;
export declare function opcodeLDRimm(Rt: number, Rn: number, imm5: number): number;
export declare function opcodeLDRlit(Rt: number, imm8: number): number;
export declare function opcodeLDRB(Rt: number, Rn: number, imm5: number): number;
export declare function opcodeLDRsp(Rt: number, imm8: number): number;
export declare function opcodeLDRBreg(Rt: number, Rn: number, Rm: number): number;
export declare function opcodeLDRH(Rt: number, Rn: number, imm5: number): number;
export declare function opcodeLDRHreg(Rt: number, Rn: number, Rm: number): number;
export declare function opcodeLDRSB(Rt: number, Rn: number, Rm: number): number;
export declare function opcodeLDRSH(Rt: number, Rn: number, Rm: number): number;
export declare function opcodeLSLSreg(Rdn: number, Rm: number): number;
export declare function opcodeLSLSimm(Rd: number, Rm: number, Imm5: number): number;
export declare function opcodeLSRS(Rd: number, Rm: number, imm5: number): number;
export declare function opcodeLSRSreg(Rdn: number, Rm: number): number;
export declare function opcodeMOV(Rd: number, Rm: number): number;
export declare function opcodeMOVS(Rd: number, imm8: number): number;
export declare function opcodeMOVSreg(Rd: number, Rm: number): number;
export declare function opcodeMRS(Rd: number, specReg: number): number;
export declare function opcodeMSR(specReg: number, Rn: number): number;
export declare function opcodeMULS(Rn: number, Rdm: number): number;
export declare function opcodeMVNS(Rd: number, Rm: number): number;
export declare function opcodeNOP(): number;
export declare function opcodeORRS(Rn: number, Rm: number): number;
export declare function opcodePOP(P: boolean, registerList: number): number;
export declare function opcodePUSH(M: boolean, registerList: number): number;
export declare function opcodeREV(Rd: number, Rn: number): number;
export declare function opcodeREV16(Rd: number, Rn: number): number;
export declare function opcodeREVSH(Rd: number, Rn: number): number;
export declare function opcodeROR(Rdn: number, Rm: number): number;
export declare function opcodeRSBS(Rd: number, Rn: number): number;
export declare function opcodeSBCS(Rn: number, Rm: number): number;
export declare function opcodeSTMIA(Rn: number, registers: number): number;
export declare function opcodeSTR(Rt: number, Rm: number, imm5: number): number;
export declare function opcodeSTRsp(Rt: number, imm8: number): number;
export declare function opcodeSTRreg(Rt: number, Rn: number, Rm: number): number;
export declare function opcodeSTRB(Rt: number, Rm: number, imm5: number): number;
export declare function opcodeSTRBreg(Rt: number, Rn: number, Rm: number): number;
export declare function opcodeSTRH(Rt: number, Rm: number, imm5: number): number;
export declare function opcodeSTRHreg(Rt: number, Rn: number, Rm: number): number;
export declare function opcodeSUBS1(Rd: number, Rn: number, imm3: number): number;
export declare function opcodeSUBS2(Rdn: number, imm8: number): number;
export declare function opcodeSUBSreg(Rd: number, Rn: number, Rm: number): number;
export declare function opcodeSUBsp(imm: number): number;
export declare function opcodeSVC(imm8: number): number;
export declare function opcodeSXTB(Rd: number, Rm: number): number;
export declare function opcodeSXTH(Rd: number, Rm: number): number;
export declare function opcodeTST(Rm: number, Rn: number): number;
export declare function opcodeUXTB(Rd: number, Rm: number): number;
export declare function opcodeUDF(imm8: number): number;
export declare function opcodeUDF2(imm16: number): number;
export declare function opcodeUXTH(Rd: number, Rm: number): number;
export declare function opcodeWFI(): number;
export declare function opcodeYIELD(): number;