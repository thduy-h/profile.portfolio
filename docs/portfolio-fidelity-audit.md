# Portfolio fidelity audit

Source of truth: both pages of `public/Thanh-Duy-Huynh-CV.pdf`, read with `pdftotext -layout`. The root PDF mentioned in the request is absent; the public PDF is valid. Repository note: `HEAD` is commit `3a15f32` (the customized site), so the upstream template was inspected at its parent, `3a15f32^`, without changing the working tree.

## CV coverage before this pass

| Area | CV requirement | Current status | Action |
| --- | --- | --- | --- |
| Identity/contact | Name, AI/CV identity, Can Tho, relocation, phone, email, GitHub, LinkedIn, CV download | PRESENT | Keep; clarify contact CTA in hero. |
| Profile | CV summary: CV/video/detection/ReID, deployment, datasets, training/evaluation, real-time pipelines, reporting, research/robotics | PRESENT | Keep full copy; restore balanced visual column. |
| Skills | Five categories and every CV skill | PRESENT | Keep all; restore original motion and icon-card language. |
| Wiley paper | Title, venue, status, 2026, Wiley, contribution, DOI | PARTIAL | Numeric DOI is only hidden behind “View DOI”; make it visible. |
| Ghost-YOLOv11 paper | Title, venue, status, 2026, real-time mango counting, GhostConv/C3k2Ghost, all four metrics | PRESENT | Keep; make metrics clearly scannable. |
| HALE-YOLO paper | Title, HUMAN 2026, accepted status, ID 207, contribution | PRESENT | Keep. |
| School-violence project | Full title, FPT University, type, dates, pipeline and all contribution tasks | PRESENT | Keep; restore sticky presentation. |
| OSNet project | Full title, institution, role/date, modules, datasets, ablations, work and festival | PRESENT | Keep; restore sticky presentation. |
| AI Valley internship | Role, organization, location, dates, every workflow and deployment tool | PRESENT | Keep full description; restore bounded motion. |
| Technical mentoring | Organizations, location, role, dates, AI/ESP32/sensor/hardware/connectivity/troubleshooting work | PRESENT | Keep full description; restore bounded motion. |
| FPT University | Degree, campus/location, GPA, expected dates, all seven courses | PRESENT | Keep; restore bounded motion. |
| Kasem Bundit University | Program, institution, Thailand, date | PRESENT | Keep. |
| Awards/certifications | All five entries, dates, titles, providers, festival topic | PRESENT | Keep. |
| Leadership | All three entries, roles, affiliations/locations, dates, responsibilities, 30+ workshops and ~1,400 youth | PARTIAL | Green program country “Vietnam” is only implicit in organization name; make it explicit. |

## Upstream feature inventory before this pass

| Original feature | Current status | Decision / reason |
| --- | --- | --- |
| Hero background SVG, dark gradients, CTA styling, social hover | PRESENT | KEEP. |
| Hero code-editor panel | MISSING | ADAPT with factual AI/CV fields. |
| About visual second column / rotated label | MISSING | ADAPT with monogram and CV focus motif; no portrait supplied. |
| Section background SVGs, separators, GlowCard, icons | PRESENT | KEEP. |
| Experience and Education Lottie | MISSING | ADAPT as small bounded motion beside the cards. |
| Animated skills marquee and icon cards | MISSING | ADAPT with grouped skills and a representative marquee. |
| Sticky stacked project cards | MISSING | ADAPT for desktop; disable stickiness on narrow screens. |
| Contact form | MISSING from visible page | ADAPT to a safe mailto handoff, because no delivery secrets are configured. |
| Scroll-to-top, navbar/mobile menu, footer | PRESENT | KEEP. |
| Dev.to blog feed | INTENTIONALLY NOT APPLICABLE | No verified Dev.to source; retain safe `/blog` empty state and no homepage fetch. |
| Original owner's portrait and unrelated social links | INTENTIONALLY NOT APPLICABLE | They are not Thanh Duy's data. |

## Complete CV checklist after implementation

| CV area | Facts verified on the site | Final status |
| --- | --- | --- |
| Identity and contact | Thanh Duy Huynh; AI Student / Computer Vision / Applied AI & Intelligent Systems; Can Tho, Vietnam; open to relocation; phone 0899998741; GitHub `thduy-h`; LinkedIn `thduyh`; public CV download. The CV email is `thduy.h@outlook.com.vn`; a later local override displays `contact@thduyh.com` on the site. | PARTIAL — later user override |
| Profile | Computer vision, video understanding, object detection, person re-identification, deployable deep learning, dataset preparation, training/evaluation, real-time video pipelines, ONNX/Docker, reporting, peer-reviewed work, AI/robotics, real-world systems | PRESENT |
| Programming & Data | Python; C/C++ fundamentals; NumPy; Pandas; data preprocessing; statistics; model evaluation | PRESENT |
| Deep Learning | PyTorch; TensorFlow/Keras; CNNs; attention mechanisms; LSTM; temporal modeling | PRESENT |
| Computer Vision | OpenCV; YOLO-based detection; image/video preprocessing; tracking; pose estimation; person re-identification; video understanding | PRESENT |
| Deployment & Tools | ONNX; TorchScript; basic TensorRT; Docker; REST API integration; Linux; Git; Jupyter; Google Colab | PRESENT |
| Robotics & Edge AI | Real-time camera pipelines; edge inference; sensor integration; ESP32; basic ROS/ROS2 | PRESENT |
| Wiley paper | Full YOLOv11-AFNet / TemporalSA-MoViNet title; Concurrency and Computation: Practice and Experience; published journal article; 2026; Wiley; spatial-temporal pipeline contribution; visible DOI `10.1002/cpe.70811` and link | PRESENT |
| Ghost-YOLOv11 paper | Full title; IEEE ICBDSE venue; published conference paper; 2026; GhostConv/C3k2Ghost resource-constrained contribution; 1.85M parameters; 2.70 GFLOPs; 0.773 MAE; 422.9 FPS on reported test split | PRESENT |
| HALE-YOLO paper | Full title; HUMAN 2026; accepted conference paper; paper ID 207; high-resolution/lossless small-object contribution | PRESENT |
| CCTV project | Full school-violence title; FPT University; university-level research project; 08/2025–08/2026; person detection, feature extraction, attention, temporal modeling, CCTV; dataset construction/cleaning, implementation, experiment design, evaluation, reporting, manuscript revision | PRESENT |
| OSNet project | Full person re-identification title; FPT University; research member; 08/2025; MDHA; Dynamic Graph Convolution; Market-1501; DukeMTMC; ablations; module design, experiments, writing; Research Festival 2025 presentation | PRESENT |
| AI Valley experience | FPT Software - AI Valley; Can Tho, Vietnam; AI Intern; 01/2026–04/2026; production AI, preprocessing, training/optimization, inference/validation, ONNX/Docker/Linux/REST integration | PRESENT |
| Mentoring experience | FPTU AI & Robotics Challenge 2025 / Vietnam Open Robotics Challenge 2024; Can Tho, Vietnam; Technical Mentor; 10/2024–08/2025; AI problem solving, ESP32, sensors, hardware, connectivity, on-site troubleshooting | PRESENT |
| FPT University education | FPT University - Can Tho Campus; Can Tho, Vietnam; Bachelor of Artificial Intelligence; GPA 3.5/4.0; 2023–2027 expected; Computer Vision, Deep Learning, Machine Learning, Data Mining, Linear Algebra, Probability & Statistics, Python for AI | PRESENT |
| Kasem Bundit education | Kasem Bundit University; Thailand; Certificate, Intensive English Program; 01/2024 | PRESENT |
| Awards and certificates | Research Festival 2025 consolation prize, FPT University, MDHA/DGC online multi-camera topic (08/2025); DeepLearning.AI NLP specialization via Coursera (04/2026); IBM/Coursera containers certificate (12/2025); Coursera Qiskit certificate (06/2026); FPT University Var-Code 2nd Prize (03/2025) | PRESENT |
| Leadership | FPT AI Club president/former academic chair at Can Tho campus, 12/2024–Present, club/technical/training/mini-project/workshop/competition work; Green Career Pioneer/Green Youth Pioneers/SDY Vietnam program manager/HR lead, Vietnam, 03/2023–Present, sustainability/green jobs/capacity building/people/comms/events, 30+ workshops and about 1,400 youth; FGE vice president, Can Tho, 09/2023–01/2025 | PRESENT |

## Final upstream feature decisions

| Original feature | Final decision |
| --- | --- |
| Hero SVG, colored editor chrome, gradients, social hover, CTA styling | KEEP / ADAPT: factual `researcher` panel and verified links. |
| About two-column visual and vertical label | ADAPT: user-supplied portrait, focus motif, and rotated label; original portrait intentionally excluded because it is another person. |
| Section SVGs/separators, GlowCard/icons/hover, scroll-to-top, navbar/mobile menu, footer | KEEP. |
| Experience and Education Lottie | ADAPT: bounded 192px visuals at desktop widths, without empty full-size columns. |
| Skills marquee | ADAPT: animated representative icon cards plus all five complete, static categories. |
| Sticky project cards | ADAPT: stacked sticky cards on desktop; normal document flow on tablet/mobile. |
| Contact form | ADAPT: visible form opens a prefilled email draft; no unavailable delivery credentials or false “sent” state. |
| Dev.to feed | INTENTIONALLY NOT APPLICABLE: no verified account; `/blog` remains a safe empty state. |
| Original owner's portrait and unrelated social links | INTENTIONALLY NOT APPLICABLE: not Thanh Duy's identity. |

Final QA for the preceding fidelity pass: full homepage inspected at 375, 390, 430, 768, 1366, and 1920px. No horizontal clipping observed. `pnpm lint` and `pnpm build` passed. The later contact-email override is the only CV difference.

Subsequent local customization: the user supplied a portrait and favicon on 2026-09-22. The portrait now replaces the monogram illustration in About; the code-editor hero remains. The working tree also contains a separate contact-email override (`contact@thduyh.com`) that differs from the email printed in the CV; this image update leaves that existing override intact.
