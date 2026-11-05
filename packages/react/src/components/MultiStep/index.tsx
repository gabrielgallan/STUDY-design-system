import { Label, MultiStepContainer, Step, Steps } from './styles';

export interface MultiStepProps {
    size: number;
    currentStep?: number;
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
    const totalSteps = Math.max(1, Math.trunc(size));
    const activeStep = Math.min(totalSteps, Math.max(0, Math.trunc(currentStep)));

    return (
        <MultiStepContainer
            role="progressbar"
            aria-label="Progresso das etapas"
            aria-valuemin={0}
            aria-valuemax={totalSteps}
            aria-valuenow={activeStep}
        >
            <Label>
                Passo {activeStep} de {totalSteps}
            </Label>

            <Steps style={{ gridTemplateColumns: `repeat(${totalSteps}, minmax(0, 1fr))` }}>
                {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
                    return <Step key={step} active={activeStep >= step} />;
                })}
            </Steps>
        </MultiStepContainer>
    );
}

MultiStep.displayName = 'MultiStep';
