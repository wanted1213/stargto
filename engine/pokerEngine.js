function calculateAction(input) {

    const pot = Number(input.pot || 0)
    const call = Number(input.call || 0)

    // 간단한 팟 오즈 계산
    let potOdds = 0
    if (call > 0) {
        potOdds = call / (pot + call)
    }

    // 임시 승률 (나중에 몬테카를로로 교체)
    const winRate = Math.random() * 0.4 + 0.3   // 30~70%

    let action = "FOLD"

    if (winRate > potOdds) {
        action = "CALL"
    }

    if (winRate > 0.65) {
        action = "RAISE"
    }

    if (winRate > 0.8) {
        action = "ALL-IN"
    }

    return {
        winRate: (winRate * 100).toFixed(1) + "%",
        potOdds: (potOdds * 100).toFixed(1) + "%",
        action: action,
        raise: action === "RAISE" ? "70% POT" : "-"
    }
}

module.exports = { calculateAction }