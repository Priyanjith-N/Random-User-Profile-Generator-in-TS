import TemplateList from './templates/TemplateList';

const initAPP = async(): Promise<void> => {
  const UserProfile = TemplateList.instance;

  const generateBtn = document.getElementById('Generate') as HTMLButtonElement;

  generateBtn.addEventListener('click', async (): Promise<void> => {
    generateBtn.textContent = 'Processing...'
    await UserProfile.getData();
    generateBtn.textContent = 'Generate Another'
  });

  await UserProfile.getData();
}

document.addEventListener('DOMContentLoaded', initAPP);