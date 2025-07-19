import { X } from "lucide-react";
import { Button } from "./ui/button";

export default function ImagePreviewModal({
  isOpen,
  previewUrl,
  onClose,
  onContinue,
}) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 mt-10">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl h-[80vh] max-h-[600px] mx-4 flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 flex-shrink-0">
          <h3 className="text-xl font-semibold text-gray-900">Image Preview</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        <div className="p-6 flex-1 flex flex-col overflow-hidden">
          {previewUrl && (
            <div className="flex-1 overflow-auto mb-6">
              <div className="flex items-center justify-center h-full">
                <img
                  src={previewUrl || "/placeholder.svg"}
                  alt="Preview"
                  className="max-w-full max-h-full object-contain rounded-lg border border-gray-200"
                />
              </div>
            </div>
          )}
          <div className="flex-shrink-0">
            <p className="text-gray-600 text-sm mb-6 text-center">
              Please ensure the image is high quality and clearly readable for
              accurate processing.
            </p>
            <div className="flex justify-end gap-4">
              <Button
                variant="outline"
                className="px-6 py-2 border-gray-300 hover:bg-gray-50 bg-transparent"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white"
                onClick={onContinue}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
