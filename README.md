# Smart Contract Vulnerable Vottun SENSEI

Este repositorio contiene un contrato inteligente vulnerable y un contrato atacante para explotar la vulnerabilidad.

## Pasos para ejecutar la vulnerabilidad:

### 1. Instalar dependencias (Hardhat):
   ```bash
   npm install
   ```

### 2. Desplegar el contrato vulnerable:
   ```bash
   npx hardhat run scripts/deploy_vulnerable.js --network <network_name>
   ```

### 3. Desplegar el contrato atacante:
   ```bash
   npx hardhat run scripts/deploy_attack.js --network <network_name>
   ```

### 4. Ejecutar ataque:
   ```bash
   npx hardhat console --network <network_name>
   const attack = await ethers.getContractAt("Attack", "0xDireccionContratoAttack");
   await attack.attack({ value: ethers.utils.parseEther("1") });
   ```

### 5. Retirar fondos robados:
   ```bash
   await attack.withdrawStolenFunds();
   ```
