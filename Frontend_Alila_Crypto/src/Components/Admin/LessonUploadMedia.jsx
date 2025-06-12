import React, { useState } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import api from "@/utils/api";

const LessonUploadMedia = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(null);
  const [mediaUrl, setMediaUrl] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [publicId, setPublicId] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("principiante");
  const [category, setCategory] = useState("");

  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      return setUploadSuccess({ success: false, message: "Seleziona un file" });
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setUploading(true);
      const res = await api.post("/admin/lessons/upload-media", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const { mediaUrl, mediaType, publicId } = res.data;
      setMediaUrl(mediaUrl);
      setMediaType(mediaType);
      setPublicId(publicId);

      setUploadSuccess({ success: true, message: "✅ Upload completato con successo!" });
    } catch (err) {
      console.error("Errore upload:", err);
      setUploadSuccess({ success: false, message: "❌ Errore durante l'upload" });
    } finally {
      setUploading(false);
    }
  };

  const handleSaveLesson = async () => {
    if (!title || !description || !mediaUrl || !mediaType || !level || !category) {
      return setSaveMessage("⚠️ Compila tutti i campi");
    }

    const newLesson = {
      title,
      description,
      level,
      category,
      type: mediaType === "image" ? "immagine" : mediaType, // conversione coerente con lo schema
      mediaUrl,
      mediaType,
      publicId
    };

    try {
      setSaving(true);
      await api.post("/admin/lessons", newLesson);
      setSaveMessage("✅ Lezione salvata con successo!");
    } catch (err) {
      console.error("Errore salvataggio lezione:", err);
      setSaveMessage("❌ Errore nel salvataggio della lezione");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="text-light p-4">
      <h3 className="mb-4">📤 Upload Media per Lezioni</h3>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Seleziona un file (video, immagine, PDF)</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} accept="video/*,image/*,application/pdf" />
      </Form.Group>

      <Button variant="primary" onClick={handleUpload} disabled={uploading}>
        {uploading ? <Spinner animation="border" size="sm" /> : "Carica file"}
      </Button>

      {uploadSuccess && (
        <Alert variant={uploadSuccess.success ? "success" : "danger"} className="mt-3">
          {uploadSuccess.message}
        </Alert>
      )}

      {mediaUrl && (
        <div className="mt-4">
          <h5>Anteprima file caricato:</h5>
          {mediaType === "video" ? (
            <video src={mediaUrl} controls width="100%" className="mt-2" />
          ) : mediaType === "image" ? (
            <img src={mediaUrl} alt="Anteprima" className="img-fluid mt-2" />
          ) : mediaType === "pdf" ? (
            <a href={mediaUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-2">
              Apri PDF
            </a>
          ) : null}

          <Form className="mt-4">
            <Form.Group className="mb-2">
              <Form.Label>Titolo lezione</Form.Label>
              <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Livello</Form.Label>
              <Form.Select value={level} onChange={(e) => setLevel(e.target.value)}>
                <option value="principiante">Principiante</option>
                <option value="intermedio">Intermedio</option>
                <option value="pro">Pro</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Categoria</Form.Label>
              <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            </Form.Group>

            <Button variant="success" onClick={handleSaveLesson} disabled={saving}>
              {saving ? "Salvataggio..." : "💾 Salva nella piattaforma"}
            </Button>
          </Form>

          {saveMessage && (
            <Alert variant={saveMessage.startsWith("✅") ? "success" : "danger"} className="mt-3">
              {saveMessage}
            </Alert>
          )}
        </div>
      )}
    </div>
  );
};

export default LessonUploadMedia;