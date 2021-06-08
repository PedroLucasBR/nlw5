import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositories/SettingsRepository";

/**
 * GET - buscas
 * POST - criação
 * PUT - alteração
 * DELETE - deletar
 * PATCH - alterar informação específica
 */

const routes = Router();

/**
 * Tipos de Parâmetros
 * Route Params = parâmetros de rota.
 * ex.: http://localhost:3333/settings/1
 * Query Params = filtros e buscas.
 * ex.: http://localhost:3333/settings/1?search=algumacoisa
 * Body Params = corpo do parâmetro (passa objetos dentro das requisições).
 * ex.: {
 *  "chat": "oi"
 *  "username": "pedro"
 * }
 */

routes.post("/settings", async (req, res) => {
  const { username, chat } = req.body;

  const settingsRepository = getCustomRepository(SettingsRepository);

  const settings = settingsRepository.create({
    username,
    chat
  });

  await settingsRepository.save(settings);

  return res.json(settings);

});

export { routes };