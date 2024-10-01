async function main() {
    const Attack = await ethers.getContractFactory("Attack");
    const vulnerableAddress = "0xYourVulnerableContractAddress";  // Replace with the actual address
    const attack = await Attack.deploy(vulnerableAddress);
    await attack.deployed();
    console.log("Attack contract deployed to:", attack.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
