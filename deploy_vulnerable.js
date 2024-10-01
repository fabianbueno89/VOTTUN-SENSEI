async function main() {
    const VulnerableContract = await ethers.getContractFactory("VulnerableContract");
    const vulnerable = await VulnerableContract.deploy();
    await vulnerable.deployed();
    console.log("VulnerableContract deployed to:", vulnerable.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
