import { UseCaseCard } from "@/components/use-case-card";
import { UseCase, useCases } from "@/config/use-cases";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center justify-center mb-8 space-y-2 mt-8 md:mt-0">
          <h1 className="text-4xl font-bold">AI Model Hub</h1>
          <p className="text-lg text-muted-foreground">
            Explore, Experiment, and Innovate with AI
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase: UseCase) => (
            <UseCaseCard key={useCase.id} {...useCase} />
          ))}
        </div>
      </main>
    </div>
  );
}